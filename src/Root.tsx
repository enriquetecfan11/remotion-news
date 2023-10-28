import {Composition, Sequence} from 'remotion';
import {XatakaData} from './data';

const Video: React.FC = () => {
	return (
		<div>
			{XatakaData.xataka.map((item, index) => (
				<Sequence key={index} from={index * 30} durationInFrames={30}>
					<div style={{margin: 50}}>
						<div
							style={{fontSize: 50, marginBottom: 20}}
							key={`title_${index}`}
						>
							{item.titular}
						</div>
						<a href={item.enlace} key={`link_${index}`}>
							{item.enlace}
						</a>
					</div>
				</Sequence>
			))}
		</div>
	);
};

export const RemotionVideo: React.FC = () => {
	return (
		<Composition
			id="MyVideo"
			component={Video}
			durationInFrames={XatakaData.xataka.length * 30} // Cada item tendrá una duración de 30 frames
			fps={30}
			width={1080}
			height={1920}
		/>
	);
};
