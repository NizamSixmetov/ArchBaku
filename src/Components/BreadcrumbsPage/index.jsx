import styles from './style.module.css';
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
}

export default function BreadcrumbsPage() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" separator="›" color='#FFF'>
        <div className={`${styles.first}`}>
          <Link underline="hover" href="/">
            Əsas səhifə
          </Link>
        </div>
        <div className={`${styles.two}`}>
          <Link
            onClick={handleClick}
            underline="hover"
            color="text.primary"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Haqqımızda
          </Link>
        </div>
      </Breadcrumbs>
    </div >
  );
}