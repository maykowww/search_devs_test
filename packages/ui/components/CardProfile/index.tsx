import { IconText } from 'components/IconText';
import { CardProps } from './model';
import { Container } from './styles';

import companyIcon from '@/assets/icons/company_icon.svg';
import emailIcon from '@/assets/icons/email_icon.svg';
import heartIcon from '@/assets/icons/heart_icon.svg';
import locationIcon from '@/assets/icons/location_icon.svg';
import siteUrlIcon from '@/assets/icons/site_url_icon.svg';
import twitterIcon from '@/assets/icons/twitter_icon.svg';
import usersIcon from '@/assets/icons/users_icon.svg';

export const CardProfile = ({
  avatar_url,
  login,
  bio,
  blog,
  company,
  email,
  followers,
  following,
  location,
  name,
  twitter_username,
  ...props
}: CardProps) => {
  const items = [
    {
      icon: usersIcon,
      text: `${followers} seguidores`,
    },
    {
      icon: heartIcon,
      text: `${following} seguindo`,
    },
    {
      icon: companyIcon,
      text: company,
    },
    {
      icon: locationIcon,
      text: location,
    },
    {
      icon: emailIcon,
      ...(email && {
        text: email,
        link: email,
      }),
    },
    {
      icon: siteUrlIcon,
      ...(blog && {
        text: blog,
        link: blog,
      }),
    },
    {
      icon: twitterIcon,
      ...(twitter_username && {
        text: `@${twitter_username}`,
        link: `https://www.twitter.com/${twitter_username}`,
      }),
    },
  ];

  return (
    <Container {...props}>
      <div className="profile-avatar-name">
        <img src={avatar_url} alt="" />
        <div className="name-tag">
          <h3>{name}</h3>
          <p>{`@${login}`}</p>
        </div>
      </div>
      <p className="bio">{bio}</p>
      <div className="icons">
        {items.map((item, index) => {
          if (!item.text) return;

          return (
            <a href={item.link} target={'_blank'} key={index}>
              <IconText className="icon" icon={item.icon} text={item.text!} />
              {index === 1 && <div className="divider" />}
            </a>
          );
        })}
      </div>
    </Container>
  );
};
