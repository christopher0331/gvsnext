import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumb = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment);

  const breadcrumbMap = {
    'wood-fences': 'Wood Fences',
    'vinyl-fences': 'Vinyl Fences',
    'chain-link-fences': 'Chain Link Fences',
    'ornamental-iron-fences': 'Ornamental Iron Fences',
    'portfolio': 'Portfolio',
    'contact': 'Contact'
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const name = breadcrumbMap[segment] || segment;
          return (
            <li key={segment} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
              {isLast ? (
                name
              ) : (
                <Link href={href}>{name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;