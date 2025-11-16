import Link from 'next/link';

const subRoutes = [
  { href: '/categories/fresh-fruits', label: 'Fresh Fruits' },
  { href: '/categories/vegetables', label: 'Vegetables' },
  { href: '/categories/fish-meat', label: 'Fish & Meat' },
  { href: '/categories/dairy-bakery', label: 'Dairy & Bakery' },
];

const CategoriesPage = () => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {subRoutes.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
