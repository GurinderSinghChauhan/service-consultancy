import collaboration from "../assets/images/collaboration.webp";
import collaborationSmall from "../assets/images/collaboration-small.webp";
import engineering from "../assets/images/engineering.webp";
import engineeringSmall from "../assets/images/engineering-small.webp";
import workspace from "../assets/images/workspace.webp";
import workspaceSmall from "../assets/images/workspace-small.webp";

const images = {
  collaboration: { src: collaboration, small: collaborationSmall, width: 1280, height: 854 },
  engineering: { src: engineering, small: engineeringSmall, width: 1600, height: 1065 },
  workspace: { src: workspace, small: workspaceSmall, width: 1280, height: 854 },
};

type SiteImageProps = {
  image: keyof typeof images;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

const SiteImage = ({ image, alt, className, sizes = "100vw", priority = false }: SiteImageProps) => {
  const asset = images[image];

  return (
    <img
      className={className}
      src={asset.src}
      srcSet={`${asset.small} 640w, ${asset.src} ${asset.width}w`}
      sizes={sizes}
      width={asset.width}
      height={asset.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
};

export default SiteImage;
