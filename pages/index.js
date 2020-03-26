import Link from 'next/link'
import Layout from '../components/Layout';

const Home = () => {

    return (
    <Layout>
        <div className="container-fluid p-5">
            <Link href="/category/[cat]" as="/category/miels">
                <a>Visit Miel category page</a>
            </Link>
        </div>
    </Layout>
    )
};

export default Home;