import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

interface ProfileCardProps {
  name: string;
  title: string;
  image: string;
  linkedinUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, image, linkedinUrl }) => {
  return (
    <div className="bg-white rounded-lg p-2 shadow-md max-w-[210px] text-center">
      {/* Profile Image */}
      <div className="mb-2">
        <img 
          src={image} 
          alt={name}
          className="w-48 h-48 rounded-lg object-cover mx-auto"
        />
      </div>

      {/* Name and Title */}
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <div className="flex items-center justify-center gap-2">
          <p className="text-gray-600">{title}</p>
          {linkedinUrl && (
            <a 
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] hover:text-[#0077B5]/80 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;