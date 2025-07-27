import { useEffect, useRef } from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  social: {
    linkedin?: string;
    email?: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="team-card">
      <div className="team-card-image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="team-card-content">
        <h3 className="team-card-name">{member.name}</h3>
        <p className="team-card-role">{member.role}</p>
        <p className="team-card-description">{member.description}</p>
        <div className="team-card-social">
          {member.social.linkedin && (
            <a 
              href={member.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin size={20} />
            </a>
          )}
          {member.social.email && (
            <a 
              href={`mailto:${member.social.email}`}
              className="social-link"
            >
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;