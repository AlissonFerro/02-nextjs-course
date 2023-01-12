import { useRouter } from 'next/router'
import Link from 'next/link';

export default function Post() {
  const router = useRouter();

  console.log(router.query.id);

  return (
    <div>
      Id da página {router.query.id}
      <ul>
        <li>
          <Link href="/">
            Ir para a home
          </Link>
        </li>
      </ul>
    </div>
  )
}
