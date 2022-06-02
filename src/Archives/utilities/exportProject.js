import createApplicationUtil from './createApplication.util';
import createFiles from './createFiles.util';

// When a user clicks the "Export project" function from the app, this function is invoked
const exportProject = (
  path,
  appName,
  genOption,
  tests,
  projectType,
  components,
  rootComponents
) => {
  // Create fully functional classic react application
  if (genOption === 1 && projectType === 'Classic React') {
    createApplicationUtil({
      path,
      appName,
      components,
      testchecked: tests
    }).catch((err) => console.log(err));
  } // export all component files, but don't create all application files
  else if (genOption === 0) {
    createFiles(components, path, appName, false);
  }
};

export default exportProject;
