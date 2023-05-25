export default function Blob(props) {
    const yellowBlobStyles = {
        top: props.start ? "-200px" : "-100px",
        right: props.start ? "-150px" : "-50px"
      } 

    const blueBlobSyles = {
        bottom: props.start ? "-200px" : "-100px",
        left: props.start ? "-150px" : "-50px"
    }
    return (
        <div className={`blob-${props.color}`} style = {props.color == "blue" ? blueBlobSyles : yellowBlobStyles}></div>
    )
}