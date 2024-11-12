<script lang="ts">
	import Presentation from '$lib/components/Presentation.svelte';

	//images
	import bigOShadedUrl from '$lib/imgs/sepytt/bigOShaded.jpeg';
	import bigo from '$lib/imgs/sepytt/bigo.png';
	import upgradeBrainByAddingRamToMoreMemoryStockPhoto from '$lib/imgs/sepytt/upgradeBrainByAddingRamToMoreMemoryStockPhoto.jpg';
	import montaigne from '$lib/imgs/sepytt/montaigne.jpg';
	import schizoChat from '$lib/imgs/sepytt/schizoChat.jpg';
	import foxputer from '$lib/imgs/sepytt/foxputer.jpg';
	import downloadRam from '$lib/imgs/sepytt/downloadRam.jpg';
	import howCanSpace from '$lib/imgs/sepytt/howcanspace.jpg';
	import halffull from '$lib/imgs/sepytt/halffull.jpg';
	import workingMemory from '$lib/imgs/sepytt/workingMemory.png';
    import controlFlow from '$lib/imgs/sepytt/controlFlow.jpg';
    import patternMatching from '$lib/imgs/sepytt/patternMatching.png';
	import babysteps from '$lib/imgs/sepytt/babysteps.jpg';
</script>

<Presentation>
	<div class="slides">
		<section id="title-group">
			<section id="title">
				<h3>Some programming tips and tricks (in Python!)</h3>
			</section>
			<section id="sub-title">
				<h4 style="text-transform: lowercase;">a little bit of everything</h4>
			</section>
			<section>
				<h5>Charts!</h5>
				<img style="height: 500px;" src={bigOShadedUrl} alt="Big O Shaded" />
			</section>
			<section>
				<h5>Fashion!</h5>
				<img src={montaigne} alt="My boy Michel looking sharp" />
			</section>
			<section>
				<h5>Human Augmentation!</h5>
				<img
					style="height: 500px"
					src={upgradeBrainByAddingRamToMoreMemoryStockPhoto}
					alt="upgradeBrainByAddingRamToMoreMemoryStockPhoto"
				/>
			</section>
			<section>
				<h5>Live Coding!</h5>
				<div style="display:flex; flex-flow: row">
					<img style="height: 400px;" src={foxputer} alt="fox bro" />
					<img style="height: 400px;" src={schizoChat} alt="bro" />
				</div>
			</section>
		</section>
		<section id="speed-group">
			<section data-background-image={howCanSpace}>
				<h5><i>Speed</i></h5>
			</section>
			<section>
				<p>Big O Notation informs the worst case complexity of an algorithm</p>
				<img style="height: 400px;" src={bigOShadedUrl} alt="Big O Shaded" />
				<p style="font-size: large;">Your algorithm should usually make you feel like the corresponding color</p>
			</section>
			<section>
				<p>Reality check</p>
				<img style="height: 400px;" src={bigo} alt="real big o" />
				<p>You can't always just <i>ignore</i> all the <i>constants</i> and <i>reduce</i> all the <i>variables</i></p>
			</section>
			<section>
				<p>Reality does not run in the worst case all of the time!</p>
				<img style="height: 400px;" src={halffull} alt="optimism" />
				<p>but it is bound to some of the time! (so be ready)</p>
			</section>
		</section>
		<section id="problemSolving-group">
			<section>
				<h5>Approaching a problem</h5>
				<img src={babysteps} alt="what about bob" />
			</section>
			<section>
				<ul>
					<li>Outline</li>
					<li>Implement</li>
					<li>Review</li>
					<li>Iterate</li>
					<li>Cleanup</li>
				</ul>
			</section>
			<section>
				<p>We do NOT got the RAM!</p>
				<img style="height: 600px;" src={workingMemory} alt="working memory wiki" />
			</section>
			<section>
                <h5>Reasonability is Queen</h5>
                <ul>
                    <li>Be the friend of your future self</li>
                    <li>Let your comments tell what you are trying to accomplish (and do not lie!)</li>
                    <li>Give functions and variables descriptive names</li>
                    <li>Minimize the contextual overload required to reason about your code!</li>
                </ul>
				<p style="font-size: small;">(speed is king)</p>
            </section>
            <section>
                <h5>Dev Debug Mode</h5>
                <ul>
                    <li>`devDebug = true`</li>
                    <li>`if devDebug: print()`</li>
                </ul>
                <p>combine to make a simple but very powerful 'debug mode', that future you will thank you for</p>
            </section>
		</section>
		<section id="controlFlow-group"> 
            <section>
                <h5>Control Flow</h5>
                <img style="height: 200px;" src={controlFlow} alt="physics" />
            </section>
            <section data-background-image={howCanSpace}>
                <h5>Exit early and often</h5>
                <ul>
                    <li>As soon as you can, leave!</li>
                    <li>Makes failure cases explicit and clear</li>
                    <li>Minimizes the logic you need to carry with you</li>
                    <li>Flattens code and improves reasonability</li>
                </ul>
            </section>
            <section>
                <h5>Pattern Matching</h5>
                <img style="height: 400px;" src={patternMatching} alt="nice pattern" />
                <p>its great do more of it!</p>
            </section>
        </section>
		<section id="aphorism-group">
			<section>
				<h5>some unsolicited aphorisms</h5>
			</section>
			<section>
				<h5>Friction is the enemy</h5>
				<ul>
					<li>More friction, less engaged</li>
					<li>Know your tools</li>
					<li>Speed is of the essence -- there is a competition for your attention</li>
					<li>Practice going without your mouse</li>
				</ul>
			</section>
			<section>
				<h5>Free RAM hack!</h5>
				<img src={downloadRam} alt="never do this" />
				<p>DO NOT COPY AND PASTE</p>
				<p>DO NOT TRANSCRIBE</p>
				<p>FLEX THE SHORT TERM MEMORY</p>
			</section>
			<section>
				<h5>LISTEN TO FRENCH PHILOSOPHY</h5>
				<p><q>Perfect is the enemy of good.</q> --Voltaire</p>
				<p>
					<q
						>When the various details and circumstances of a matter have so perplexed us that we are
						powerless to see and choose what is most advantageous, I find the surest thing to do,
						even if no other consideration invited us to it, is this: to cast ourselves to the
						course in which there is the most decency and justice, and since we are in doubt about
						the shortest path, to hold always to the straight path. (I:24)</q
					> --Montaigne
				</p>
				<p>
					<q>In the midst of winter, I found there was, within me, an invincible summer.</q> --Camus
				</p>
			</section>
			<section>
				<b>Make it Work</b>
                <br />
				<b>Make it Right</b>
                <br />
				<b>Make it Fast</b>
                <br />
			</section>
			<section>
				<b>The Zen of Python</b>
				<ol>
					<li>Beautiful is better than ugly.</li>
					<li>Explicit is better than implicit.</li>
					<li>Simple is better than complex.</li>
					<li>Complex is better than complicated.</li>
					<li>Flat is better than nested.</li>
					<li>Sparse is better than dense.</li>
					<li>Readability counts.</li>
					<li>Special cases aren't special enough to break the rules.</li>
					<li>Although practicality beats purity.</li>
					<li>Errors should never pass silently.</li>
					<li>Unless explicitly silenced.</li>
					<li>In the face of ambiguity, refuse the temptation to guess.</li>
					<li>There should be one-- and preferably only one --obvious way to do it.</li>
					<li>Although that way may not be obvious at first unless you're Dutch.</li>
					<li>Now is better than never.</li>
					<li>Although never is often better than *right* now.</li>
					<li>If the implementation is hard to explain, it's a bad idea.</li>
					<li>If the implementation is easy to explain, it may be a good idea.</li>
					<li>Namespaces are one honking great idea -- let's do more of those!</li>
				</ol>
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
</style>
