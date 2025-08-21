<script lang="ts">
	import Presentation from '$lib/components/Presentation.svelte';
	import 'reveal.js/dist/reveal.css';

	import morphDataikuUrl from '$lib/imgs/mcptool/morphdataiku.png';
	import mcpUsbUrl from '$lib/imgs/mcptool/mcpusb.png';
	import mcpArchUrl from '$lib/imgs/mcptool/mcparch.jpg';
	import responsibilityUrl from '$lib/imgs/mcptool/responsibility.png';
	import gpt5StoneAgeUrl from '$lib/imgs/mcptool/gpt5stoneage.jpg';
	import gpt5StonksUrl from '$lib/imgs/mcptool/gpt5stonks.png';
	import clippyHelpUrl from '$lib/imgs/mcptool/clippyhelp.png';
	import superClippyUrl from '$lib/imgs/mcptool/superclippy.png';
	import cursorExampleUrl from '$lib/imgs/mcptool/cursorexample.png';
	import shopify1Url from '$lib/imgs/mcptool/shopfiyagentexample1.png';
	import shopify2Url from '$lib/imgs/mcptool/shopifyagentexample2.png';
</script>

<Presentation>
	<div class="slides">
		<!-- Title Group -->
		<section id="title-group">
			<section id="title">
				<h2>MCP and Agentic Tools</h2>
			</section>
			<section id="sub-title">
				<h3>How Model Context Protocol is changing the game and why we should care</h3>
			</section>
		</section>

		<!-- Opening & Context Setting -->
		<section>
			<section>
				<h3>@Context</h3>
			</section>

			<!-- The AI Revolution in Data Consulting -->
			<section>
				<h3>The AI Revolution in Data Consulting</h3>
				<ul>
					<li>Where we are: PowerBI, Dataiku, Snowflake, Stibo</li>
					<li>Where we're going: natural language over data, LLM powered insights</li>
					<li>From oral tradition to the library to Google to ChatGPT to ...</li>
				</ul>

				<div
					style="height: 300px; display: flex; align-items: center; justify-content: center; margin: 20px 0;"
				>
					<img src={morphDataikuUrl} alt="Morph Dataiku" />
				</div>
			</section>

			<!-- The track that we are on -->
			<section>
				<h3>The track that we are on</h3>
				<ul>
					<li>So much progress in such a short time, world already changing</li>
					<li>What will allow us to take that next step?</li>
					<li>Tools! (via MCP!) we are entering the Stone Age</li>
				</ul>

				<div
					style="height: 300px;  display: flex; align-items: center; justify-content: center; margin: 20px 0;"
				>
					<img src={gpt5StoneAgeUrl} alt="GPT5 Stone Age" />
				</div>
			</section>
		</section>

		<!-- What is MCP? -->
		<section>
			<section>
				<h3>What is MCP?</h3>
				<h6>Model Context Protocol</h6>
			</section>

			<!-- Model Context Protocol - The "Rosetta Stone" for AI -->
			<section>
				<h3>MCP = UCB-C for AI</h3>
				<ul>
					<li>Communication protocol enabling AI tools to interact with eachother</li>
					<li>Like how USB standardized device connections</li>
					<li>
						Enables AI to "talk" to any system, database, or tool that has MCP implementations
					</li>
				</ul>

				<div
					style="height: 300px; display: flex; align-items: center; justify-content: center; margin: 20px 0;"
				>
					<img src={mcpUsbUrl} alt="MCP as Rosetta Stone" />
				</div>
			</section>

			<!-- How It Works (Simple Terms) -->
			<section>
				<h3>How It Works</h3>
				<ul>
					<li>AI sends request → MCP translates → Tool responds → MCP translates back</li>
					<li>
						Much like how engineers have been doing, just a new protocol for LLMs (with some quirks
						for them)
					</li>
					<li>
						Often times building these MCP routes on top of the API is straightforward, we could
						certainly do it
					</li>
				</ul>

				<div
					style="height: 300px; display: flex; align-items: center; justify-content: center; margin: 20px 0;"
				>
					<img src={mcpArchUrl} alt="MCP Flow" />
				</div>
			</section>

			<!-- Why Software Engineers Care -->
			<section>
				<h3>Why Care</h3>
				<ul>
					<li>
						This is the technical thing that will allow us to turn ANY SYSTEM (that we are building
						/ coding ourselves) into one that can interact with LLMs
					</li>
					<li>
						For example if HairClub wanted an AI that could go in cONEct and interact with the API
						-- for all the same reasons you have an API for a website and not a direct DB connection
						to the client
					</li>
					<li>Elevate every user into a power user, better AI usage, personal knowledge banks!</li>
					<li>TLDR: more opportunities for everyone!</li>
				</ul>

			</section>
		</section>

		<!-- How MCP Changes Everything -->
		<section>
			<section>
				<h3>How MCP Changes Things</h3>
			</section>

			<!-- Enabling AI Sales Opportunities -->
			<section>
				<h3>AI Sales Opportunities</h3>
				<ul>
					<li>GPT5 just made a big deal out of the fact that they can call tools now!</li>
					<li>Using the tools keeps us as thought leaders in the space</li>
					<li>We have the ability to make the tools too!</li>
				</ul>

				<div
					style="height: 300px;  display: flex; align-items: center; justify-content: center; margin: 20px 0;"
				>
					<img src={gpt5StonksUrl} alt="GPT5 Stonks" />
				</div>
			</section>

			<!-- Reducing Friction -->
			<section>
				<h3>Reducing Friction</h3>
				<h5>(my nemesis)</h5>
				<ul>
					<li>AI interfaces in tools turning every user into a super user</li>
					<li>AI directly in your workspace creating artifacts for you</li>
					<li>
						Eventually not even going into the tools themselves but orchestrating from without via
						AI interface
					</li>
				</ul>

				<div
					style="height: 300px; display: flex; align-items: center; justify-content: center; margin: 20px 0;"
				>
					<img src={clippyHelpUrl} alt="Clippy Help" />
				</div>
			</section>

			<!-- Agentic Tools - The Real Game Changer -->
			<section>
				<h3>Agentic Tools - the Evolution</h3>
				<ul>
					<li>AI that can take action, not just respond</li>
					<li>Ability for improvement via instruction and with rules</li>
					<li>Your AI becomes your digital colleague</li>
				</ul>

				<div
					style="height: 300px;  display: flex; align-items: center; justify-content: center; margin: 20px 0;"
				>
					<img src={superClippyUrl} alt="Super Clippy" />
				</div>
			</section>

			<!-- Real-World Examples -->
			<section>
				<h3>Examples</h3>
				<ul>
					<li>Cursor: AI-powered development</li>
					<li>Shopify's integrated AI</li>
					<li>GitHub Copilot with MCP extensions</li>
					<li>Future: AI that can query your CRM, update your BI dashboards, etc.</li>
				</ul>

				<div
					style="height: 300px; display: flex; align-items: center; justify-content: center; margin: 20px 0;"
				>
					<img src={cursorExampleUrl} alt="Cursor Example" />
				</div>
			</section>

			<section>
				<img src={shopify1Url} alt="Shopify Agent Example 1" />
			</section>

			<section>
				<img src={shopify2Url} alt="Shopify Agent Example 2" />
			</section>

			<!-- Responsibility -->
			<section>
				<h3>Responsibility</h3>
				<ul>
					<li>
						Horror stories out there of it deleting things (has happened to me, has happened to
						businesses (Replit)!)
					</li>
					<li>
						These tools can come with large costs, Cursor themselves believe power users could spend
						upwards of $200 a month, I have seen cases of that being spent in a day! Must be cost
						aware and prompt well
					</li>
					<li>With great power comes great responsibility</li>
				</ul>

				<div
					style="height: 300px; background-color: #333; display: flex; align-items: center; justify-content: center; margin: 20px 0;"
				>
					<img src={responsibilityUrl} alt="Great Power" />
				</div>
			</section>
		</section>

		<!-- Practical Applications for Your Team -->
		<section>
			<section>
				<h3>Practical Applications for the Team</h3>
			</section>

			<section>
				<h3>Cursor - Agentic Text Editor</h3>
				<ul>
					<li>Example of what simply adding an LLM over a text editor and file structure can do</li>
					<li>From Notepad to Notepad++ to VScode to Cursor!</li>
					<li>Built for coding, but can be used for anything, all just text afterall!</li>
				</ul>
			</section>

			<!-- Sales & Marketing Revolution -->
			<section>
				<h3>Sales & Marketing Use Cases</h3>
				<ul>
					<li>Client knowledge banks in Cursor</li>
					<li>AI that knows your business inside and out</li>
					<li>Meeting notes integration and synthesis (this could be everyone really!)</li>
				</ul>
			</section>

			<!-- Data Team Transformation -->
			<section>
				<h3>Data Team Use Cases</h3>
				<ul>
					<li>Store your schemas in a reference file for better queries and faster results</li>
					<li>
						Can connect to datasources directly, allowing LLM to write query and provide results in
						one
					</li>
					<li>
						Can create repository of useful scripts that may work across projects that you and LLM
						can reference
					</li>
				</ul>
			</section>

			<!-- Consulting Edge -->
			<section>
				<h3>Integration with Company Knowledge Base</h3>
				<ul>
					<li>
						So OneDrive are just files, you can open cursor right on that (doesn't read DOCX so
						needs some work)
					</li>
					<li>
						Develop workflow ingesting client notes to automatiaclly draft proposals using our
						styling guide
					</li>
					<li>Probably 10000 more great ideas!</li>
				</ul>
			</section>
		</section>

		<section>
			<!-- LIVE DEMO: Building Together with Cursor -->
			<section>
				<h1>Thank you!</h1>
			</section>
		</section>
	</div>
</Presentation>

<style>
	p {
		font-size: 2rem;
	}
	li {
		font-size: 1.5rem;
	}
	h3 {
		font-size: 2.5rem;
	}
	h4 {
		font-size: 2rem;
	}
	h5 {
		font-size: 1.8rem;
	}
</style>
