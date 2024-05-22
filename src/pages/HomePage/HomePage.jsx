import FileList from '../../components/FileList/FileList';
import NewFileForm from '../../components/NewFileForm/NewFileForm';

export default function HomePage() {
  // WIP: addFile
  // - Need addFile to update files state in FileList.
  function addFile(fileToAdd, callback) {
    // fileToAdd should be new file sent from handleAddFile call in NewFileForm.
    // callback should be state setter setFiles in FileList.
    callback(fileToAdd);
  }

  return (
    <section>
      <h1>Home Page</h1>
      <NewFileForm addFile={addFile} />
      <FileList />
    </section>
  );
}
