import Image from 'next/image'

export default function Locales() {
	return (	
		<div className="contenedorLocales">
			<div className = "pitru">
				<Image
				src="/../public/pitru.jpeg"
				width={100}
              	height={100}
              	alt="localPitru"
				/>				
			</div>

			<div className = "tolten">
				<Image
				src="/../public/tolten.jpeg"
				width={100}
	            height={100}
	            alt="localTolten"
				/>				
			</div>

			<div className = "loncoche">
				<Image
				src="/../public/loncoche.jpeg"
				width={100}
              	height={100}
              	alt="localLonconche"
				/>				
			</div>
		</div>
	)
}