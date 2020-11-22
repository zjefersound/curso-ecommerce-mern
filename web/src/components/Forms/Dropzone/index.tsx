import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ErrorMessage from '../ErrorMessage';

import {
  Wrapper,
  Container,
  UploadIcon,
  PlusIcon,
} from './styles';

interface Props {
  onFileUploaded: (file: File | File[]) => void;
  previousFileSrc?: string;
  showImageUploaded?: boolean;
  errorMessage?: string;
}

const Dropzone: React.FC<Props> = ({
  onFileUploaded,
  previousFileSrc,
  errorMessage,
  showImageUploaded
}) => {

  const [selectedFileUrl, setSelectedFileUrl] = useState(previousFileSrc || '');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles.length > 1 ? acceptedFiles: acceptedFiles[0];
    
    const fileUrl = URL.createObjectURL(Array.isArray(file) ? file[0]: file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);

  }, [onFileUploaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*, video/*'
  });

  return (
    <Wrapper>
      <Container className={`dropzone ${errorMessage ? 'error' : ''}`} {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive
          ? <p><UploadIcon /> Solte a imagem para enviar</p>
          : selectedFileUrl && showImageUploaded
            ? <img src={selectedFileUrl} alt="uploaded file" />
            : <p><PlusIcon /> Clique ou arraste uma imagem</p>
        }
      </Container>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  )
}
export default Dropzone;