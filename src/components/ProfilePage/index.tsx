import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>Mohammad Adnaan</h1>
        <h2>@callmeadnaan</h2>

        <p>
          Computer Science student at <a href="http://www.amu.com/">@AMU</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 10 de junho de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>615</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
