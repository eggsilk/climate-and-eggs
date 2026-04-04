export interface Post {
  slug:    string;
  title:   string;
  date:    string;
  excerpt: string;
  content: string; // HTML string
}

export const posts: Post[] = [
  {
    slug:    "a-very-cynical-view",
    title:   "A Very Cynical View",
    date:    "2025",
    excerpt: "On cognitive dissonance, half-lies, and the gap between what people believe and what they do.",
    content: `
<p>If we've been telling lies, you've been telling half-lies. A man who tells lies merely hides the truth, but a man who tells half-lies has forgotten where he put it.</p>

<p>Once I had a co-worker who was very well behaved, he did his job well and got along with everyone. We worked in a sustainability consultancy firm, he believed in our mission and carried all the makings of a climate conscious and sensible person. He drove an electric vehicle, was learning about composting, and took advantage of the firm's policy to grant each of its employees a day off each year to volunteer within their communities.</p>

<p>Early January, in one of the first team meetings of the year, he announced that he had gotten engaged in his vacation in Bermuda. He had a slide show prepared with pictures he took, the last slide of which was a picture he took underwater of a thresher shark, a magnificent creature with a tail longer than its body, and an endangered specie.</p>

<p>I felt something strange and disconcerting that I did not know how to express at the moment, something that no one else in the room seemed to share. They celebrated him, the beautiful vacation he had had, and his engagement. I could not get over the fact that he had, using his American passport, and the money he had accumulated supposedly working towards fighting climate change, went ahead and spent his vacation days by invading an endangered specie's habitat.</p>

<p>There seems to be a sizeable cognitive dissonance on everyone's part. When questioned, it truly comes across that these people believe in the mission and essence of the work they were doing; climate change as one of the most pressing issues of our time, and the urgency to act against it. Their lives were shaped around this urgency, they would attest to it personally and with conviction, but somehow it was possible for the entire group to be blind to the objectively harmful effects of their actions on the very thing they believed they were protecting. I don't believe any of these well behaved, climate conscious workers had ever attempted to trace how a sustainability consultancy's work exactly translates to the outcomes that their marketing materials claim.</p>

<p>Authenticity is a key pillar of the contemporary ethos, it is an unnegotiable trait of the modern hero. Whatever one does, one must do with belief, with conviction, otherwise one is destined to fail. I have no doubt that my coworkers believed in the importance of the supposed outcome of their work. But I have every reason to doubt if they were cognizant of some of their other desires, other stories that they believed in.</p>

<p>One narrative tells them they should be driving electric cars, another tells that people of their status take overseas vacations in all inclusive tropical resorts during the winter break that has been allotted to them every year. Perhaps because at this point of convergence, the first, the more altruistic narrative no longer satisfies them as much as the latter does.</p>

<p>Where these two narratives that exist within them converge, one would hope that a conscious person would be able to make a judgement call. On my part there is no virtue to be announced here, if one is aware of their desire for material comfort, and even existential comfort, which one attains by following what is "known", then they may pursue it at the detriment of all other considerations. But people do not make judgement calls where they cannot perceive one to be made. The horror lies in the fact that most of us don't understand the forces that exist within us most of the time.</p>

<p>The mainstream has long since learned how to absorb and assimilate the counterculture. It was as early as the 90s that punk teenagers started appearing in television ads selling soft drinks. Can we blame the companies assimilating the good nature of humans to serve their true needs, willing and motivated workers? Can we blame the scorpion for stinging the frog as they cross the river?</p>

<p>I for one am merely sick of the half-lies that are being told. Tell your lies and own them. When I ask the manager at a global advertising firm why they think Coke still advertises as heavily as they do even though generations were born and died drinking the thing, that the drink is not too far away from being embroidered into our DNA, I don't want to hear "brand awareness is important", I want them to tell me in the face that they are fighting for mental real estate in the collective unconscious. I don't care what you tell yourself at night so that you can feel like a decent person, I want you to own the things you do, and accept the consequences of your actions.</p>
    `.trim(),
  },
];
