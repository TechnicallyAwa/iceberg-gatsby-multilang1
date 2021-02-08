import React from 'react';

import { Twitter } from 'styled-icons/boxicons-logos/Twitter';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { Instagram } from 'styled-icons/boxicons-logos/Instagram';
import { Linkedin } from 'styled-icons/boxicons-logos/Linkedin';

import * as S from './styled';

const SocialLinks = () => {
  return (
    <S.SocialLinksList>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://github.com/akwaaba-fest"
          title="Github"
          target="_blank"
        >
          <Github />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://twitter.com/akwaaba_fest"
          title="Twitter"
          target="_blank"
        >
          <Twitter />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://instagram.com/akwaaba-fest"
          title="Instagram"
          target="_blank"
        >
          <Instagram />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
      <S.SocialLinksItem>
        <S.SocialLinksLink
          href="https://linkedin.com/akwaabafest"
          title="Linkedin"
          target="_blank"
        >
          <Linkedin />
        </S.SocialLinksLink>
      </S.SocialLinksItem>
    </S.SocialLinksList>
  );
};

export default SocialLinks;
