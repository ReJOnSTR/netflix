import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import "./users.css";

const profileImages = [
  "https://avatars.mds.yandex.net/i?id=5615487703c8773c62e6488e977fb0fb6b8d048d-8496275-images-thumbs&n=13",
  "https://i.pinimg.com/originals/5d/0f/9c/5d0f9ca26f942f0eda69ffd4dc1710dc.png",
  "https://avatars.mds.yandex.net/i?id=d2d92f927032ecc4132c2857bd208a77888266eb-10104341-images-thumbs&n=13",
  // Add more image URLs as needed
];

export default function UsersPage() {
  const [profiles, setProfiles] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProfileIndex, setSelectedProfileIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(profileImages[0]);
  const history = useHistory();

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleAddProfile = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const newProfile = { name, image: selectedImage };
    setProfiles([...profiles, newProfile]);
    toggleModal();
    e.target.reset();
  };

  const handleDeleteProfile = () => {
    if (selectedProfileIndex !== null) {
      const updatedProfiles = profiles.filter(
        (_, i) => i !== selectedProfileIndex
      );
      setProfiles(updatedProfiles);
    }
    setSelectedProfileIndex(null);
    toggleModal();
  };

  const handleCancel = () => {
    setSelectedProfileIndex(null);
    toggleModal();
  };

  const handleProfileClick = () => {
    history.push("/home");
  };

  return (
    <>
      <div className="ana-div-users">
        <div className="background-users"></div>
        <div className="users-container">
          <h1>Kim izliyor?</h1>
          <div className="profiles">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="profile"
                onClick={handleProfileClick}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setSelectedProfileIndex(index);
                  toggleModal();
                }}
              >
                <img src={profile.image} alt={profile.name} />
                <p>{profile.name}</p>
              </div>
            ))}
            <div className="add-profile" onClick={toggleModal}>
              <div className="plus-icon">
                <img
                  src="https://img.icons8.com/?size=100&id=37839&format=png&color=FFFFFF"
                  alt="Add Profile"
                />
              </div>
            </div>
          </div>
          <Modal isOpen={modalOpen} toggle={handleCancel}>
            <ModalHeader toggle={handleCancel}>
              {selectedProfileIndex !== null ? "Profil Sil" : "Profil Ekle"}
            </ModalHeader>
            <ModalBody>
              {selectedProfileIndex !== null ? (
                <p>Profili silmek istiyor musunuz?</p>
              ) : (
                <Form onSubmit={handleAddProfile}>
                  <FormGroup>
                    <Label for="name">Profil Adı: </Label>
                    <Input type="text" name="name" id="name" required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="image">Fotoğraf Seç:</Label>
                    <div className="image-selection">
                      {profileImages.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`Profile ${index}`}
                          className={`selectable-image ${
                            selectedImage === img ? "selected" : ""
                          }`}
                          onClick={() => setSelectedImage(img)}
                        />
                      ))}
                    </div>
                  </FormGroup>
                  <Button color="primary" type="submit">
                    Profil Ekle
                  </Button>
                </Form>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={handleCancel}>
                İptal
              </Button>
              {selectedProfileIndex !== null && (
                <Button color="danger" onClick={handleDeleteProfile}>
                  Sil
                </Button>
              )}
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  );
}
