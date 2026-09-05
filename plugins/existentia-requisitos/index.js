const path = require('path');
const fs = require('fs/promises');
const {Globby, parseMarkdownFile, DEFAULT_PARSE_FRONT_MATTER} = require('@docusaurus/utils');

const CATEGORIES = [
  {type: 'RN', dirRel: 'requisitos/RN'},
  {type: 'RF', dirRel: 'requisitos/RF'},
  {type: 'RNF', dirRel: 'requisitos/RNF'},
  {type: 'UC', dirRel: 'requisitos/UC'},
  {type: 'ER', dirRel: 'modelagem/ER'},
];

function existentiaRequisitosPlugin(context) {
  return {
    name: 'existentia-requisitos',

    async loadContent() {
      const items = [];
      for (const {type, dirRel} of CATEGORIES) {
        const absoluteDir = path.join(context.siteDir, 'docs', dirRel);
        const files = await Globby(['**/*.md', '**/*.mdx', '!index.*', '!**/_*'], {
          cwd: absoluteDir,
        });
        for (const file of files) {
          const filePath = path.join(absoluteDir, file);
          const fileContent = await fs.readFile(filePath, 'utf8');
          const {frontMatter} = await parseMarkdownFile({
            filePath,
            fileContent,
            parseFrontMatter: DEFAULT_PARSE_FRONT_MATTER,
            removeContentTitle: false,
          });
          const parsed = path.parse(file);
          items.push({
            type,
            dirRel,
            file,
            base: parsed.name,
            frontMatter,
          });
        }
      }
      return {items};
    },

    async contentLoaded({content, actions}) {
      actions.setGlobalData(content);
    },
  };
}

module.exports = existentiaRequisitosPlugin;