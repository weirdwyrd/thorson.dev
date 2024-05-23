<script>
	import { onMount } from 'svelte';

	import Reveal from 'reveal.js';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Notes from 'reveal.js/plugin/notes/notes';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/black.css';
	import 'reveal.js/plugin/highlight/monokai.css';

	import Title from './slides/present/Title.svelte';

	//images
	import mapImgUrl from '$lib/imgs/wi-map.png';
	import chainmailImgUrl from '$lib/imgs/Chainmail-1st-thumb.jpg';
	import fantasySupplementImgUrl from '$lib/imgs/Fantasy_Supplement.jpg';
	import dndPopularityImgUrl from '$lib/imgs/dndpopularity.webp';
	import eraserGmPlayersImgUrl from '$lib/imgs/eraserGmPlayers.png';
	import eraserGmSaImgUrl from '$lib/imgs/eraserGmSa.png';
	import eraserPlayerEngineerImgUrl from '$lib/imgs/eraserPlayerEngineer.png';
	import eraserCommImgUrl from '$lib/imgs/eraserComm.png';
	import ultimateSandboxImgUrl from '$lib/imgs/ultimateSandbox.png';
	import masterGamblersImgUrl from '$lib/imgs/masterOfTheGamblers.jpg';
    import itMageImgUrl from '$lib/imgs/itMage.png';

	onMount(() => {
		const deck = new Reveal({
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			controls: true,
			progress: true
		});

		deck.initialize({
			plugins: [Markdown, Highlight, Notes]
		});
	});
</script>

<div class="reveal">
	<div class="slides">
		<Title />
		<section>
			<section><h3>What is a Role Playing Game?</h3></section>
			<section>
				<div style="padding-left: 90px; padding-right: 90px;">
					<p>It all started with Dungeons and Dragons in the 1970s: Lake Geneva, WI</p>
				</div>
				<img src={mapImgUrl} alt="LOTR WI Map" style="height: 400px" />
				<p>Our very own Shire!</p>
			</section>
			<section>
				<p>
					Gary Gygax and Jeff Perren create their own medieval-historical wargame: <i>Chainmail!</i>
				</p>
				<img src={chainmailImgUrl} alt="Chainmail" />
				<p>
					The goal is to still provide a historical simulation, but with a focus on controlling only
					a single character, not an entire army.
				</p>
			</section>
			<section>
				<p>
					With the release of <i>Fantasy Supplement</i> the game diverges from the historic roots, but
					the experience is still that of a simulation, with a robust rule-set.
				</p>
				<img src={fantasySupplementImgUrl} alt="Fantasy Supplement" />
				<p>There be Dragons!</p>
				<p>
					Shortly after Gargy Gygax and Dave Arneson create their legendary Dungeons, and the game
					begins to resemble the D&D of today.
				</p>
			</section>
			<section>
				<p>
					Fast forward ~50 years and D&D has firmly entered the zeitgeist with an estimated market
					valuation of $15 Billion (with a B!).
				</p>
				<img src={dndPopularityImgUrl} alt="D&D interest graph" style="height: 400px;" />
			</section>
		</section>
		<section>
			<section>
				<h3>Why the history lesson?</h3>
			</section>
			<section>
				<ul>
					<li>RPGs are rooted in historical wargaming, highly simulationist in nature.</li>
					<li>
						Complex, interwoven systems featuring randomized tables, specific game flow, and rules
						for edge cases.
					</li>
					<li>
						Many different RPG systems, which are often called modules (maybe we can call them <i
							>frameworks</i
						>).
					</li>
					<li>
						Different <i>frameworks</i> have different philosophies, rules, abstractions, data flow,
						and edge cases... (sounds familiar)
					</li>
				</ul>
			</section>
		</section>
		<section>
			<section><h3>How does the game work?</h3></section>
			<section>
				<p>Group decides they want to play a game!</p>
				<img src={eraserGmPlayersImgUrl} alt="GM and Players" style="height: 300px;" />
				<ul>
					<li>Typically split into two distinct roles: GM and Player</li>
					<li>
						Each Player assumes control of a single character, and collectively forms the Party
					</li>
					<li>
						The Game Master (Dungeon Master for D&D) is everyone and everything else in the world,
						as well as the referee.
					</li>
				</ul>
			</section>
			<section>
				<p>Game Master as Solution Architect</p>
				<ul>
					<li>
						Often the most experienced with firm understanding of multiple systems (<i>frameworks</i
						>).
					</li>
					<li>
						Collaborate with players to identify desired experience (<i>requirements gathering</i>).
					</li>
				</ul>
				<img src={eraserGmSaImgUrl} alt="GM as SA" style="height: 150px;" />
				<ul>
					<li>
						Will use expertise to identify the 'best' system for the players, 'best' being defined
						as: what are their players familiar with, what would their players like to learn, what <i
							>framework</i
						> has the right opinions to solve the 'problem' of fulfilling the desired experience.
					</li>
					<li>
						Process is similar to gathering user requirements, communicating expectations, starting
						the process of group storytelling, and soliciting engagement from the players.
					</li>
				</ul>
			</section>
			<section>
				<p>Players are Engineers</p>
				<ul>
					<li>
						Like in any good team, the GM cannot be doing all the work. It is a collaborative
						effort.
					</li>
					<li>Success requires buy-in and engagement from the players.</li>
				</ul>
				<img src={eraserPlayerEngineerImgUrl} alt="Player as Engineer" style="height: 150px;" />
				<p>Game flows like this:</p>
				<ul>
					<li>
						The Party (<i>team</i>) has an end goal in mind. The GM presents them with a set of
						problems. The solution to the problem can be <i>anything</i>.
					</li>
					<li>
						Here begins the joy of an RPG, and the excitement for many software engineers: the
						ability to solve a problem along with the freedom to collaborate, brainstorm, and
						implement the best possible solution.
					</li>
				</ul>
			</section>
			<section>
				<p>Communication is Key!</p>
				<ul>
					<li>
						The team must discuss potential methods of solving the problem, identify and utilize
						their individual and collective strengths and weaknesses, and pull together to achieve
						more than they ever could as individuals.
					</li>
				</ul>
				<img src={eraserCommImgUrl} alt="Communication Chaos" style="height: 250px;" />
				<ul>
					<li>
						Once a plan is formed, the team brings their intention to the GM (<i>SA</i>) and
						attempts to execute by engaging with the systems of the RPG. They are attempting to
						solve the puzzle with defined constrainst provided by the Game and Game Master.
					</li>
					<li>
						In other words: use the framework or language of the environment to implement a solution
						to the problem outlined by the business requirements and Solution Architect.
					</li>
				</ul>
			</section>
		</section>
		<section>
			<section><h3>The ultimate sandbox</h3></section>
			<section>
				<ul>
					<li>
						RPGs provide a fantastic sandbox for discovery, group story telling, problem solving,
						and collaboration. That sounds like software engineering.
					</li>
				</ul>
				<img
					src={ultimateSandboxImgUrl}
					alt="Ultimate Sandbox by Michael Whelen"
					style="height: 200px;"
				/>
				<ul>
					<li>
						It gets better. The Players and GM will often customize and re-create the game to their
						own needs and liking. Creating their own systems for edge cases insufficently handled by
						the provided framework.
					</li>
					<li>
						As engineers, I think we have all found ourselves working with libraries that don't
						quite fit our particular use case, and as a result create our own custom solution.
					</li>
					<li>
						The group is now actively designing game systems to solve the problems particular to
						their domain, team, and the problems they face. Now that sounds <i>a lot</i> like software
						engineering!
					</li>
				</ul>
			</section>
			<section>
				<p>Problem solving is fun and free!</p>
				<img src={masterGamblersImgUrl} alt="Master of gamblers" style="height: 200px;" />
				<ul>
					<li>
						An RPG provides the opportunity to flex problem solving muscles and push the limits of
						creativity, to take risk and experience reward as a team, to share in the each other's
						successes and failures, all in a domain that is isolated from the real-life concerns
						that might prevent that freedom.
					</li>
					<li>
						Constraints in game are reminiscent of reality, but without the real and tangible
						consequences. A player can take calculated risks, and get better and making those
						calculations, without fear of lasting consequence:
						<ul>
							<li>Failing to solve the quest in time will not disappoint the customer.</li>
							<li>Failing to grab the loot will not negatively affect the business.</li>
							<li>A character's death will not result in getting fired.</li>
						</ul>
					</li>
				</ul>
			</section>
		</section>
		<section>
			<section><h3>The memories</h3></section>
			<section>
                <p><i>Man is it fun!</i></p>
				<ul>
					<li>
						The lasting memories I have formed, the life long bonds, are invaluable (eg: Matthew's rite of passage.)
					</li>
					<li>
						Take this game and give it to a team of engineers?
						<ul>
							<li>I believe they would fall in love!</li>
							<li>Freedom to scratch all the itches that real business requirements may keep from them.</li>
							<li>
								Mold them into a problem solving power-house of a team that firmly understands each
								other's strengths and weaknesses, knows how to leverage each other to success, and
								would move heaven and earth to help their team through whatever challenge is before
								them.
							</li>
							<li>
								Whether that challenge be a pack of goblins cornering the party mage, or a sudden
								slew of unexpected bugs introduced by a dependancy updating with breaking changes.
							</li>
						</ul>
					</li>
				</ul>
			</section>
            <section data-background-image={itMageImgUrl} data-background-size="1000px"/>
		</section>
		<section>
			<section><h3>Thank you!</h3></section>
		</section>
	</div>
</div>

<style>
	p {
		font-size: 2rem;
	}
	li {
		font-size: 1.5rem;
	}
</style>
