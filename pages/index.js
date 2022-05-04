import Image from 'next/image'
import RegisterButton from '../components/reg';

export default function Home() {

	return (
		<div className="text-lg">

			<div className="flex grow">
				<div>
					<div>10th Annual</div>
					<div className="text-4xl font-bold mb-5">Palo Alto Middle School Math Camp</div>

					<div className="my-2">
						<strong>Location: </strong> Gunn High School
					</div>
					
					<div className="my-2">
						<strong>Session 1: </strong> June 6th - 10th, 2022 <br />
						<strong>Session 2: </strong> June 13th - 17th, 2022
					</div>

					<div className="my-2">
						<div><strong>Cost: </strong> $250 </div>
						<div className='text-sm italic'>Financial Aid is Available.</div>
					</div>

					<div className="mb-8 mt-2 lg:max-w-lg">
						Organized by members of the <strong>Gunn Math Circle</strong> and <strong>Paly Math Club</strong>,
						the <strong>Palo Alto Middle School</strong> (PAMS) Math Camp aims to build interest
						in math in middle school students through an exploration of various
						topics, <strong>several of which are not covered in the standard middle
							school/high school curriculum.</strong>
					</div>

					<RegisterButton />
				</div>

				<div className="hidden xl:block ml-auto shrink-0">
					<Image src="/squiggles.png" width={457} height={424.5} />
				</div>
			</div>

			<div className="shrink-0 mt-[200px] mb-[100px] flex items-center justify-center gap-6">
				<Image src="/prev-1.jpg" width={500} height={375} style={{ borderRadius: 30 }} />
				<Image src="/prev-2.jpg" width={500} height={375} style={{ borderRadius: 30 }} />
			</div>

			<div>
				<div className="text-center font-bold text-3xl">Our Team</div>
			</div>
		</div>
	)
}
