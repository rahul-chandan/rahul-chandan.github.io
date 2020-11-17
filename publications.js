publications = [
// publications = {
    // "conferencePublications": [
        {
            "title": "Incentivizing efficient use of shared infrastructure: Optimal tolls in congestion games",
            "authors": "D. Paccagnan, <b>R. Chandan</b> and J. R. Marden",
            "conference": "ACM TEAC",
            "date": "2020",
            "status": "submitted",
            "pdfFile": "./publications/paccagnan2020incentivizing.pdf",
            "url": "https://arxiv.org/pdf/1911.09806.pdf",
            "abstract": "How can we design mechanisms to promote efficient use of shared resources? Here, we answer this question in relation to the well-studied class of atomic congestion games, used to model a variety of problems, including traffic routing. Within this context, a methodology for designing tolling mechanisms that minimize the system inefficiency (price of anarchy) exploiting solely local information is so far missing in spite of the scientific interest. In this manuscript we resolve this problem through a tractable linear programming formulation that applies to and beyond polynomial congestion games. When specializing our approach to the polynomial case, we obtain tight values for the optimal price of anarchy and corresponding tolls, uncovering an unexpected link with load balancing games. We also derive optimal tolling mechanisms that are constant with the congestion level, generalizing the results of [8] to polynomial congestion games and beyond. Finally, we apply our techniques to compute the efficiency of the marginal cost mechanism. Surprisingly, optimal tolling mechanism using only local information perform closely to existing mechanism that utilize global information [6], while the marginal cost mechanism, known to be optimal in the continuous-flow model, has lower efficiency than that encountered levying no toll. All results are tight for pure Nash equilibria, and extend to coarse correlated equilibria."
        },
        {
            "title": "When Smoothness is Not Enough: Toward Exact Quantification and Optimization of the Price of Anarchy",
            "authors": "<b>R. Chandan</b>, D. Paccagnan and J. R. Marden",
            "conference": "Operations Research",
            "date": "2020",
            "status": "submitted",
            "pdfFile": "./publications/chandan2020whensmoothness.pdf",
            "url": "",
            "abstract": "The design of incentives that promote efficient user behaviours in competitive settings hinges on our ability to accurately evaluate the performance of emergent system outcomes. In these settings, the most popular performance metric is the price of anarchy, which is the ratio between the worst emergent behaviour and the system optimum. Although the study of the price of anarchy is widespread, obtaining exact bounds even for a specified class of games remains a challenge. The widely studied smoothness framework (Roughgarden 2015) is capable of providing universal price of anarchy bounds for a large class of games, but fails to provide exact bounds when the system-level objective is not necessarily aligned with social welfare. Given this limitation, we introduce a generalization of the smoothness framework which alleviates this issue. Based on this framework, we provide a tractable mechanism for computing the exact price of anarchy for a class of games wherein the sum over agents' local costs is not necessarily equal to the social cost (e.g., congestion games with incentives). Furthermore, we demonstrate how this mechanism extends naturally to a methodology for deriving incentive structures that optimize the price of anarchy. We conclude the paper by applying our techniques to the problem of rebate design in atomic congestion games. Interestingly, our findings suggest that there is a significant gap between the performance guarantees and efficient incentive structures in discrete environments when compared to their continuous flow counterparts. <i>For the interested reader, the authors provide a software package, available in both MATLAB® and Python, that implements the techniques described in this manuscript at https://github.com/rahul-chandan/resalloc-poa.</i>"
        },
        {
            "title": "When showing your hand pays off: Announcing strategic intentions in Colonel Blotto games",
            "authors": "<b>R. Chandan</b>, K. Paarporn and J. R. Marden",
            "conference": "ACC 2020",
            "date": "2020",
            "status": "presented",
            "pdfFile": "./publications/chandan2020when.pdf",
            "url": "https://arxiv.org/pdf/2002.11648",
            "abstract": "In competitive adversarial environments, it is often advantageous to obfuscate one’s strategies or capabilities. However, revealing one’s strategic intentions may shift the dynamics of the competition in complex ways. Can it ever be advantageous to reveal strategic intentions to an opponent? In this paper, we consider three-stage Colonel Blotto games in which one player can choose whether or not to pre-commit resources to a single battlefield before play begins. This pre-commitment is public knowledge. In response, the opponent can either secure the battlefield by matching the pre-commitment with its own forces, or withdraw. In a two-player setting, we show that a weaker player never has an incentive to pre-commit any amount of resources to a battlefield regardless of how valuable it is. We then consider a three-player setting in which two players fight against a common adversary on separate fronts. Only one of the two players facing the adversary has the option of pre-committing. We find there are instances where this player benefits from pre-committing. The analysis indicates that under non-cooperative team settings and no possibility of forming alliances, there can be incentives to publicly announce one’s strategic intentions to an adversary."
        },
        {
            "title": "Utility Design for Distributed Resource Allocation–Part I: Characterizing and Optimizing the Exact Price of Anarchy",
            "authors": "D. Paccagnan, <b>R. Chandan</b> and J. R. Marden",
            "conference": "IEEE TAC",
            "date": "2019",
            "status": "accepted",
            "pdfFile": "./publications/paccagnan2019utility.pdf",
            "url": "https://arxiv.org/abs/1807.01333",
            "abstract": "Game theory has emerged as a fruitful paradigm for the design of networked multiagent systems. A fundamental component of this approach is the design of agents' utility functions so that their self-interested maximization results in a desirable collective behavior. In this work we focus on a well-studied class of distributed resource allocation problems where each agent is requested to select a subset of resources with the goal of optimizing a given system-level objective. Our core contribution is the development of a novel framework to tightly characterize the worst case performance of any resulting Nash equilibrium (price of anarchy) as a function of the chosen agents' utility functions. Leveraging this result, we identify how to design such utilities so as to optimize the price of anarchy through a tractable linear program. This provides us with a priori performance certificates applicable to any existing learning algorithm capable of driving the system to an equilibrium. Part II of this work specializes these results to submodular and supermodular objectives, discusses the complexity of computing Nash equilibria, and provides multiple illustrations of the theoretical findings."
        },
        {
            "title": "Characterizing the interplay between information and strength in Blotto games",
            "authors": "K. Paarporn, <b>R. Chandan</b>, M. Alizadeh and J. R. Marden",
            "conference": "CDC 2019",
            "date": "",
            "status": "presented",
            "pdfFile": "./publications/paarporn2019characterizing.pdf",
            "url": "https://arxiv.org/abs/1909.03382",
            "abstract": "In competitive interactions between two opposing adversaries, informational asymmetries may provide an advantage to one competitor over the other. The application domains of this interplay are numerous, such as the security of cyber-physical systems, politics, and advertising campaigns. Hence it is important to identify the value information offers in these contests. In this paper, we investigate informational asymmetries in the Colonel Blotto game, which is a gametheoretic model of competitive resource allocation between two players over a finite set of battlefields. We consider a case where the battlefield valuations are subject to randomness, and one of the two players knows the valuations with certainty. The other knows only a distribution on the battlefield realizations. However, the informed player has fewer resources to allocate. We study a two battlefield setup in the Colonel Blotto game. We then focus on a three battlefield setup in the General Lotto game, a popular variant of the Colonel Blotto game. We characterize mixed equilibrium strategies and the equilibrium payoff as a function of the players’ budgets and battlefield valuations. This allows us to identify the parameter ranges in which the informed player has the competitive advantage. In a setting where both are uninformed and the weaker resource player has the option to exchange resources for information, we quantify the value of information when information costs a fraction of its budget."
        },
        {
            "title": "When Smoothness is Not Enough: Toward Exact Quantification and Optimization of the Price-of-Anarchy",
            "authors": "<b>R. Chandan</b>, D. Paccagnan and J. R. Marden",
            "conference": "CDC 2019",
            "date": "",
            "status": "presented",
            "pdfFile": "./publications/chandan2019when.pdf",
            "url": "https://arxiv.org/abs/1904.10915",
            "abstract": "Today's multiagent systems have grown too complex to rely on centralized controllers, prompting increasing interest in the design of distributed algorithms. In this respect, game theory has emerged as a valuable tool to complement more traditional techniques. The fundamental idea behind this approach is the assignment of agents' local cost functions, such that their selfish minimization attains, or is provably close to, the global objective. Any algorithm capable of computing an equilibrium of the corresponding game will inherit an approximation ratio that is, in the worst case, equal to the price-of-anarchy of the considered class of equilibria. Therefore, a successful application of the game design approach hinges on the possibility to quantify and optimize the equilibrium performance.\nToward this end, we introduce the notion of generalized smoothness, and show that the resulting efficiency bounds are significantly tighter compared to those obtained using the traditional smoothness approach. Leveraging this newly-introduced notion, we quantify the equilibrium performance for the class of local resource allocation games. Finally, we show how the agents' local decision rules can be designed in order to optimize the efficiency of the corresponding equilibria, by means of a tractable linear program."
        },
        {
            "title": "Computing optimal taxes in atomic congestion games",
            "authors": "<b>R. Chandan</b>, D. Paccagnan, B. L. Ferguson and J. R. Marden",
            "conference": "NetEcon 2019",
            "date": "",
            "status": "presented",
            "pdfFile": "",
            "url": "https://netecon19.inria.fr/files/2019/06/article-2-chandan.pdf",
            "abstract": "When the performance of a system is dictated by the behaviour of its users, self-interested choices can result in sub-optimal system operation, as is the case in road traffic networks. The inefficiency resulting from such selfish behaviour is commonly measured by the ratio between the emergent worst-case system cost and the minimum system cost, termed price-of-anarchy. As the degree of inefficiency can be significant even for relatively simple systems (e.g., affine congestion games), researchers have proposed a variety of approaches to align the emergent selfish behaviour with the desired system objective. A well-studied and promising method is that of altering users' perceived costs by means of taxes."
        },
        {
            "title": "Optimal Price of Anarchy in Cost-Sharing Games",
            "authors": "<b>R. Chandan</b>, D. Paccagnan and J. R. Marden",
            "conference": "ACC 2019",
            "date": "",
            "status": "presented",
            "pdfFile": "./publications/chandan2019optimal.pdf",
            "url": "https://arxiv.org/abs/1903.06288",
            "abstract": "The design of distributed algorithms is central to the study of multiagent systems control. In this paper, we consider a class of combinatorial cost-minimization problems and propose a framework for designing distributed algorithms with a priori performance guarantees that are near-optimal. We approach this problem from a game-theoretic perspective, assigning agents cost functions such that the equilibrium efficiency (price of anarchy) is optimized. Once agents' cost functions have been specified, any algorithm capable of computing a Nash equilibrium of the system inherits a performance guarantee matching the price of anarchy. Towards this goal, we formulate the problem of computing the price of anarchy as a tractable linear program. We then present a framework for designing agents' local cost functions in order to optimize for the worst-case equilibrium efficiency. Finally, we investigate the implications of our findings when this framework is applied to systems with convex, nondecreasing costs."
        }
]
