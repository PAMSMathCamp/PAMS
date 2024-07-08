import Image from 'next/image'
import RegisterButton from '../components/reg';

export default function Home() {

	return (
		<div className="text-lg">

			<div className="flex grow">
				<div>
					<div>13th Annual</div>
					<div className="text-4xl font-bold mb-5">Palo Alto Middle School Math Camp</div>

					<div className="my-2">
						<strong>Location: </strong> Palo Verde Elementary School room 11 and 12
					</div>
					
					<div className="my-2">
						<strong>Session 1: </strong> June 19th - 14th, 2024 <br />
						<strong>Session 2: </strong> June 17th - 21st, 2024
					</div>

					<div className="my-2">
						<div><strong>Suggested Donation: </strong> $200 </div>
						<div className='text-sm italic'>(Donation is optional and funds Paly Math Club and Gunn Math Circle.)</div>
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

			<div className="shrink-0 mt-[200px] mb-[100px] flex flex-wrap items-center justify-center gap-6">
				<div className="xl:relative left-[100px] top-[50px]"><Image src="/prev-3.jpg" width={500} height={375} style={{ borderRadius: 30 }} /></div>
				<div className="xl:relative right-[100px] bottom-[100px]"><Image className="relative" src="/prev-4.jpeg" width={500} height={375} style={{ borderRadius: 30 }} /></div>
			</div>

			<div className="flex items-center flex-col">
				<div className="text-center font-bold text-3xl m-3">Our Team</div>

				<div className="text-center lg:max-w-lg m-3">
					Our team of talented high schoolers is dedicated to nurturing 
					the interests of young mathematicians. Instructors include <strong>several USA(J)MO 
					qualifiers</strong> and students involved in <strong>high-level mathematical research.</strong>
				</div>

				<div className="text-center lg:max-w-lg m-3 mt-10">
					All proceeds will go towards supporting the <strong>Paly and Gunn Math 
					Clubs</strong> in the upcoming school year. Financial aid is available, 
					and registration is on a <strong>first-come first-serve basis.</strong>
				</div>
			</div>
		</div>
	)
}
