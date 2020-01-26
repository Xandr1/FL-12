const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

function buildStructure (array, node) {
iterateStructureArray(array, node);
}

function iterateStructureArray (structureArray, currentNode) {
for (let i = 0; i < structureArray.length; i++) {
  createStructure(structureArray[i], currentNode);
}
}

function createStructure (structureObject, currentNode) {
if (structureObject.folder === true) {
  createFolder(structureObject.title, structureObject.children, currentNode);
} else if (structureObject.title) {
  createFile(structureObject.title, currentNode);
}
}

let folder = 'folder';
let hasParent = 'has-parent';

function createFolder (title, folderChildrenArray, currentNode) {
let folderNode = document.createElement('div');
const parentNodeClass = String(currentNode.getAttribute('class'));   
const folderNameNode = createFolderNameNode(title);
folderNode.setAttribute('class', folder);
folderNode.appendChild(folderNameNode);
if (parentNodeClass.includes(folder)) {
  folderNode.setAttribute('class', folderNode.getAttribute('class') + ' ' + hasParent);
}
if (folderChildrenArray){
  createFolderContent(folderChildrenArray, folderNode);
} else if (!folderChildrenArray) {
  createFolderContent(false, folderNode);
}
currentNode.appendChild(folderNode);
}  

let folderName = 'folder-name';
let folderIcon = '<i class="material-icons">folder</i>';

function createFolderNameNode (title) {
let folderNameNode = document.createElement('div');
const folderNameTitleNode = document.createElement('span');
folderNameNode.setAttribute('class', folderName);
folderNameNode.innerHTML = folderIcon;
folderNameTitleNode.innerText = title;
folderNameNode.appendChild(folderNameTitleNode);
folderNameNode.addEventListener('click', useFolder);
return folderNameNode;
}

let folderContent = 'folder-content';
let folderEmpty = 'folder-empty';
let folderEmptyText = 'Folder is empty';
let isHidden = 'is-hidden';


function createFolderContent (folderChildrenArray, currentNode) {
let folderContentNode = document.createElement('div');
folderContentNode.setAttribute('class', folderContent + ' ' + isHidden);
if (folderChildrenArray){
  currentNode.appendChild(folderContentNode);
  iterateStructureArray(folderChildrenArray, folderContentNode);
} else if (!folderChildrenArray) {
  let folderEmptyContentNode = document.createElement('div');
  let folderEmptyTextContentNode = document.createElement('span');
  folderEmptyContentNode.setAttribute('class', folderEmpty);
  folderEmptyTextContentNode.innerText = folderEmptyText;
  folderEmptyContentNode.appendChild(folderEmptyTextContentNode);
  folderContentNode.appendChild(folderEmptyContentNode);
  currentNode.appendChild(folderContentNode);
}
}

let file = 'file';
let fileName = 'file-name';
let fileIcon = '<i class="material-icons">insert_drive_file</i>';


function createFile (title, currentNode) {
const fileNameNode = document.createElement('span');
const parentNodeClass = String(currentNode.getAttribute('class'));
let fileNode = document.createElement('div');
fileNode.setAttribute('class', file + ' ' + fileName);
fileNode.innerHTML = fileIcon;
fileNameNode.innerText = title;
fileNode.appendChild(fileNameNode);
if (parentNodeClass.includes(folder)) {
  fileNode.setAttribute('class', fileNode.getAttribute('class') + ' ' + hasParent);
}
currentNode.appendChild(fileNode);
}

let folderOpenIcon = 'folder_open';
let folderClosedIcon = 'folder';
const zero = 0;

function useFolder () {
const folderContentNode = this.nextSibling;
const folderNameIconNode = this.childNodes[zero];
let folderContentClasses = String(folderContentNode.getAttribute('class')).split(' ');
if (folderContentClasses.includes(isHidden)) {
  for (let i = 0; i in folderContentClasses; i++) {
    if (folderContentClasses[i] === isHidden) {
      folderContentClasses[i] = '';
      folderNameIconNode.innerText = folderOpenIcon;
    }
  }
} else {
  folderContentClasses[folderContentClasses.length + 1] = isHidden;
  folderNameIconNode.innerText = folderClosedIcon;
}
folderContentClasses = folderContentClasses.join(' ').trim();
folderContentNode.setAttribute('class', folderContentClasses);
}

const root = document.getElementById('root');

buildStructure(structure, root);
