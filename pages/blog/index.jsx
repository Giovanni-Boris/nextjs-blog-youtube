import Layout from "../../components/Layout";
import Link from "next/link";
export default function index({data}) {
	return (
		<Layout>
			<h1>Lista de posts</h1>
			{data.map(({id,title})=>(
				<div key={id}>
					<Link href={`/blog/${id}`}>
						<a>{id} - {title}</a>
					</Link>
				</div>
			))}
		</Layout>
	)
}

export async function getStaticProps () {
	try{
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data  =await res.json();

		return{
			props:{
				data
			}
		}
	}catch(error){
		console.log(err);
	}
}