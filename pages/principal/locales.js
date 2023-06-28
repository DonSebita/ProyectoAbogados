import Image from 'next/image'
import Layout from '../../components/Layout'

export default function Locales() {
	return (	
		<Layout>
			<div className="contenedorLocales">
				<div className = "pitru">
					<Image
					src="/../public/pitru.jpeg"
					width={500}
	              	height={700}
	              	alt="localPitru"
					/>				
				</div>

				<div className = "tolten">
					<Image
					src="/../public/tolten.jpeg"
					width={500}
		            height={700}
		            alt="localTolten"
					/>				
				</div>

				<div className = "loncoche">
					<Image
					src="/../public/loncoche.jpeg"
					width={500}
	              	height={700}
	              	alt="localLonconche"
					/>				
				</div>
			</div>
		</Layout>
	)
}