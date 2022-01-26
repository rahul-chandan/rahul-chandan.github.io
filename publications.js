publications = {
    "Working Papers": {
        "w5":{
            "title": "The Art of Concession in General Lotto Games",
            "authors": "<b>R. Chandan</b>, K. Paarporn, D. Kovenock, M. Alizadeh and J. R. Marden",
            "conference": "TBA",
            "conferencelong": "To Be Announced (TBA)",
            "date": "2021",
            "status": "working",
            "pdfFile": "./publications/chandan2021art.pdf",
            "url": "",
            "abstract": "Success in adversarial environments often requires investment into additional resources in order to improve one's competitive position. But, can intentionally decreasing one's own competitiveness ever provide strategic benefits in such settings? In this paper, we focus on characterizing the role of ``concessions'' as a component of strategic decision making. Specifically, we investigate whether a player can gain an advantage by either conceding budgetary resources or conceding valuable prizes to an opponent. While one might na{\"i}vely assume that the player cannot, our work demonstrates that -- perhaps surprisingly -- concessions do offer strategic benefits when made correctly. In the context of General Lotto games, we first show that neither budgetary concessions nor value concessions can be advantageous to either player in a 1-vs.-1 scenario. However, in settings where two players compete against a common adversary, we find opportunities for one of the two players to improve her payoff by conceding a prize to the adversary. We provide necessary and sufficient conditions on the parameters for which such concessions exist, and identify the optimal prize value to concede."
        },
        "w4":{
            "title": "Balancing Asymptotic and Transient Efficiency Guarantees in Set Covering Games",
            "authors": "R. Konda, <b>R. Chandan</b>, D. Grimsman and J. R. Marden",
            "conference": "TBA",
            "conferencelong": "To Be Announced (TBA)",
            "date": "2021",
            "status": "working",
            "pdfFile": "",
            "url": "https://arxiv.org/abs/2106.04031",
            "abstract": "Game theoretic approaches have gained traction as a robust methodology for designing distributed local algorithms that induce a desired overall system configuration in a multi-agent setting. However, much of the emphasis in these approaches is on providing asymptotic guarantees on the performance of network of agents, and there is a gap in the study of efficiency guarantees along transients of these distributed algorithms. Therefore, in this paper, we study the transient efficiency guarantees of a natural game-theoretic algorithm in the class of set covering games, which have been used to model a variety of applications. Our main results characterize the optimal utility design that maximizes the guaranteed efficiency along the transient of the natural dynamics. Furthermore, we characterize the Pareto-optimal frontier with regards to guaranteed efficiency in the transient and the asymptote under a class of game-theoretic designs. Surprisingly, we show that there exists an extreme trade-off between the long-term and short-term guarantees in that an asymptotically optimal game-theoretic design can perform arbitrarily bad in the transient."
        },
        "w3":{
            "title": "The anarchy-stability tradeoff in congestion games",
            "authors": "<b>R. Chandan</b>, D. Paccagnan and J. R. Marden",
            "conference": "TBA",
            "conferencelong": "To Be Announced (TBA)",
            "date": "2021",
            "status": "working",
            "pdfFile": "",
            "url": "https://arxiv.org/abs/2107.06331",
            "abstract": "This work focuses on the design of incentive mechanisms in congestion games, a commonly studied model for competitive resource sharing. While the majority of the existing literature on this topic focuses on unilaterally optimizing the worst case performance (i.e., price of anarchy), in this manuscript we investigate whether optimizing for the worst case has consequences on the best case performance (i.e., price of stability). Perhaps surprisingly, our results show that there is a fundamental tradeoff between these two measures of performance. Our main result provides a characterization of this tradeoff in terms of upper and lower bounds on the Pareto frontier between the price of anarchy and the price of stability. Interestingly, we demonstrate that the mechanism that optimizes the price of anarchy inherits a matching price of stability, thereby implying that the best equilibrium is not necessarily any better than the worst equilibrium for such a design choice. Our results also establish that, in several well-studied cases, the unincentivized setting does not even lie on the Pareto frontier, and that any incentive with price of stability equal to 1 incurs a much higher price of anarchy."
        },
        "w2":{
            "title": "A General Lotto game with asymmetric budget uncertainty",
            "authors": "K. Paarporn, <b>R. Chandan</b>, M. Alizadeh and J. R. Marden",
            "conference": "TBA",
            "conferencelong": "To Be Announced (TBA)",
            "date": "2021",
            "status": "working",
            "pdfFile": "",
            "url": "https://arxiv.org/abs/2106.12133",
            "abstract": "We consider General Lotto games of asymmetric information where one player's resource endowment is randomly assigned one of two possible values, and the assignment is not revealed to the opponent. We completely characterize the Bayes-Nash equilibria for two such formulations -- namely, one in which the opponent's endowment is fixed and common knowledge, and another where the opponent has a per-unit cost to utilize resources. We then highlight the impact these characterizations have on resource allocation problems involving a central commander that decides how to assign available resources to two sub-colonels competing in separate Lotto games against respective opponents. We find that randomized assignments, which induce the Bayesian game interactions, do not offer strategic advantages over deterministic ones when the opponents have fixed resource endowments. However, this is not the case when the opponents have per-unit costs to utilize resources. We find the optimal randomized assignment strategy can actually improve the commander's payoff two-fold when compared to optimal deterministic assignments, and four-fold in settings where the commander also pays a per-unit cost for resources."
        },
        "w1":{
            "title": "When smoothness is not enough: Toward exact quantification and optimization of the price of anarchy",
            "authors": "<b>R. Chandan</b>, D. Paccagnan and J. R. Marden",
            "conference": "TBA",
            "conferencelong": "To Be Announced (TBA)",
            "date": "2021",
            "status": "working",
            "pdfFile": "./publications/chandan2021when.pdf",
            "url": "https://arxiv.org/abs/1911.07823",
            "abstract": "The design of incentives that promote efficient user behaviours in competitive settings hinges on our ability to accurately evaluate the performance of emergent system outcomes. In these settings, the most popular performance metric is the price of anarchy, which is the ratio between the worst emergent behaviour and the system optimum. Although the study of the price of anarchy is widespread, obtaining exact bounds even for a specified class of games remains a challenge. The widely studied smoothness framework (Roughgarden 2015) is capable of providing universal price of anarchy bounds for a large class of games, but fails to provide exact bounds when the system-level objective is not necessarily aligned with social welfare.\nGiven this limitation, we introduce a generalization of the smoothness framework which alleviates this issue. Based on this framework, we provide a tractable mechanism for computing the exact price of anarchy for a class of games wherein the sum over agents' local costs is not necessarily equal to the social cost (e.g., congestion games with incentives). Furthermore, we demonstrate how this mechanism extends naturally to a methodology for deriving incentive structures that optimize the price of anarchy. We conclude the paper by applying our techniques to the problem of rebate design in atomic congestion games. Interestingly, our findings suggest that there is a significant gap between the performance guarantees and efficient incentive structures in discrete environments when compared to their continuous flow counterparts.\n<i>For the interested reader, the authors provide a software package, available in both MATLAB® and Python, that implements the techniques described in this manuscript at <a target=\"_blank\" href=\"https://github.com/rahul-chandan/resalloc-poa\">https://github.com/rahul-chandan/resalloc-poa</a>.</i>"
        }
    },
    "Journal Articles": {
        "j2":{
            "title": "Optimal taxes in congestion games",
            "authors": "D. Paccagnan, <b>R. Chandan</b>, B. L. Ferguson and J. R. Marden",
            "conference": "ACM TEAC",
            "conferencelong": "ACM Transactions on Economics and Computation (TEAC)",
            "date": "2021",
            "status": "published",
            "pdfFile": "./publications/paccagnan2020incentivizing.pdf",
            "url": "https://arxiv.org/abs/1911.09806v3",
            "abstract": "How can we design mechanisms to promote efficient use of shared resources? Here, we answer this question in relation to the well-studied class of atomic congestion games, used to model a variety of problems, including traffic routing. Within this context, a methodology for designing tolling mechanisms that minimize the system inefficiency (price of anarchy) exploiting solely local information is so far missing in spite of the scientific interest. In this manuscript we resolve this problem through a tractable linear programming formulation that applies to and beyond polynomial congestion games. When specializing our approach to the polynomial case, we obtain tight values for the optimal price of anarchy and corresponding tolls, uncovering an unexpected link with load balancing games. We also derive optimal tolling mechanisms that are constant with the congestion level, generalizing the results of [8] to polynomial congestion games and beyond. Finally, we apply our techniques to compute the efficiency of the marginal cost mechanism. Surprisingly, optimal tolling mechanism using only local information perform closely to existing mechanism that utilize global information [6], while the marginal cost mechanism, known to be optimal in the continuous-flow model, has lower efficiency than that encountered levying no toll. All results are tight for pure Nash equilibria, and extend to coarse correlated equilibria."
        },
        "j1":{
            "title": "Utility design for distributed resource allocation—part i: Characterizing and optimizing the exact price of anarchy",
            "authors": "D. Paccagnan, <b>R. Chandan</b> and J. R. Marden",
            "conference": "IEEE TAC",
            "conferencelong": "IEEE Transactions on Automatic Control (TAC)",
            "date": "2019",
            "status": "published",
            "pdfFile": "./publications/paccagnan2019utility.pdf",
            "url": "https://arxiv.org/abs/1807.01333v3",
            "abstract": "Game theory has emerged as a fruitful paradigm for the design of networked multiagent systems. A fundamental component of this approach is the design of agents' utility functions so that their self-interested maximization results in a desirable collective behavior. In this work we focus on a well-studied class of distributed resource allocation problems where each agent is requested to select a subset of resources with the goal of optimizing a given system-level objective. Our core contribution is the development of a novel framework to tightly characterize the worst case performance of any resulting Nash equilibrium (price of anarchy) as a function of the chosen agents' utility functions. Leveraging this result, we identify how to design such utilities so as to optimize the price of anarchy through a tractable linear program. This provides us with a priori performance certificates applicable to any existing learning algorithm capable of driving the system to an equilibrium. Part II of this work specializes these results to submodular and supermodular objectives, discusses the complexity of computing Nash equilibria, and provides multiple illustrations of the theoretical findings."
        }
    },
    "Peer-Reviewed Conference Articles":{
        "c9":{
            "title": "The Art of Concession in General Lotto Games",
            "authors": "<b>R. Chandan</b>, K. Paarporn, D. Kovenock, M. Alizadeh and J. R. Marden",
            "conference": "GameNets 2021",
            "conferencelong": "EAI Game Theory for Networks 2021",
            "date": "2021",
            "status": "presented, in proceedings",
            "pdfFile": "./publications/chandan2021art.pdf",
            "url": "./publications/chandan2021art.pdf",
            "abstract": "Success in adversarial environments often requires investment into additional resources in order to improve one's competitive position. But, can intentionally decreasing one's own competitiveness ever provide strategic benefits in such settings? In this paper, we focus on characterizing the role of ``concessions'' as a component of strategic decision making. Specifically, we investigate whether a player can gain an advantage by either conceding budgetary resources or conceding valuable prizes to an opponent. While one might na{\"i}vely assume that the player cannot, our work demonstrates that -- perhaps surprisingly -- concessions do offer strategic benefits when made correctly. In the context of General Lotto games, we first show that neither budgetary concessions nor value concessions can be advantageous to either player in a 1-vs.-1 scenario. However, in settings where two players compete against a common adversary, we find opportunities for one of the two players to improve her payoff by conceding a prize to the adversary. We provide necessary and sufficient conditions on the parameters for which such concessions exist, and identify the optimal prize value to concede."
        },
        "c8":{
            "title": "The Division of Assets in Multiagent Systems: A Case Study in Team Blotto Games",
            "authors": "K. Paarporn, <b>R. Chandan</b>, M. Alizadeh and J. R. Marden",
            "conference": "CDC 2021",
            "conferencelong": "60th IEEE Conference on Decision and Control (CDC)",
            "date": "2021",
            "status": "in proceedings",
            "pdfFile": "",
            "url": "https://arxiv.org/abs/2103.16688",
            "abstract": "Multi-agent systems are designed to concurrently accomplish a diverse set of tasks at unprecedented scale. Here, the central problems faced by a system operator are to decide (i) how to divide available resources amongst the agents assigned to tasks and (ii) how to coordinate the behavior of the agents to optimize the efficiency of the resulting collective behavior. The focus of this paper is on problem (i), where we seek to characterize the impact of the division of resources on the best-case efficiency of the resulting collective behavior. Specifically, we focus on a team Colonel Blotto game where there are two sub-colonels competing against a common adversary in a two battlefield environment. Here, each sub-colonel is assigned a given resource budget and is required to allocate these resources independent of the other sub-colonel. However, their success is dependent on the allocation strategy of both sub-colonels. The central focus of this manuscript is on how to divide a common pool of resources among the two sub-colonels to optimize the resulting best-case efficiency guarantees. Intuitively, one would imagine that the more balanced the division of resources, the worse the performance, as such divisions restrict the sub-colonels' ability to employ joint randomized strategies that tend to be necessary for optimizing performance guarantees. However, the main result of this paper demonstrates that this intuition is actually incorrect. A more balanced division of resources can offer better performance guarantees than a more centralized division. Hence, this paper demonstrates that the resource division problem is highly non-trivial in such enmeshed environments and worthy of significant future research efforts."
        },
        "c7":{
            "title": "Mission Level Uncertainty in Multi-Agent Resource Allocation",
            "authors": "R. Konda, <b>R. Chandan</b> and J. R. Marden",
            "conference": "CDC 2021",
            "conferencelong": "60th IEEE Conference on Decision and Control (CDC)",
            "date": "2021",
            "status": "in proceedings",
            "pdfFile": "",
            "url": "https://arxiv.org/abs/2106.04029",
            "abstract": "In recent years, a significant research effort has been devoted to the design of distributed protocols for the control of multi-agent systems, as the scale and limited communication bandwidth characteristic of such systems render centralized control impossible. Given the strict operating conditions, it is unlikely that every agent in a multi-agent system will have local information that is consistent with the true system state. Yet, the majority of works in the literature assume that agents share perfect knowledge of their environment. This paper focuses on understanding the impact that inconsistencies in agents' local information can have on the performance of multi-agent systems. More specifically, we consider the design of multi-agent operations under a game theoretic lens where individual agents are assigned utilities that guide their local decision making. We provide a tractable procedure for designing utilities that optimize the efficiency of the resulting collective behavior (i.e., price of anarchy) for classes of set covering games where the extent of the information inconsistencies is known. In the setting where the extent of the informational inconsistencies is not known, we show -- perhaps surprisingly -- that underestimating the level of uncertainty leads to better price of anarchy than overestimating it."
        },
        "c6":{
            "title": "Tractable mechanisms for computing near-optimal utility functions",
            "authors": "<b>R. Chandan</b>, D. Paccagnan and J. R. Marden",
            "conference": "AAMAS 2021",
            "conferencelong": "20th International Conference on Autonomous Agents and Multiagent Systems (AAMAS)",
            "date": "2021",
            "status": "in proceedings, presented",
            "pdfFile": "./publications/chandan2021tractable.pdf",
            "url": "https://arxiv.org/abs/2102.04542",
            "abstract": "Large scale multiagent systems must rely on distributed decision making, as centralized coordination is either impractical or impossible. Recent works approach this problem under a game theoretic lens, whereby utility functions are assigned to each of the agents with the hope that their local optimization approximates the centralized optimal solution. Yet, formal guarantees on the resulting performance cannot be obtained for broad classes of problems without compromising on their accuracy. In this work, we address this concern relative to the well-studied problem of resource allocation with nondecreasing submodular welfare functions. We show that optimally designed local utilities achieve an approximation ratio (price of anarchy) of `1−c/e`, where `c` is the function’s curvature and `e` is Euler’s constant. The upshot of our contributions is the design of approximation algorithms that are distributed and efficient, and whose performance matches that of the best existing (and centralized) schemes."
        },
        "c5":{
            "title": "When showing your hand pays off: Announcing strategic intentions in Colonel Blotto games",
            "authors": "<b>R. Chandan</b>, K. Paarporn and J. R. Marden",
            "conference": "ACC 2020",
            "conferencelong": "2020 American Control Conference (ACC)",
            "date": "2020",
            "status": "in proceedings, presented",
            "pdfFile": "./publications/chandan2020when.pdf",
            "url": "https://arxiv.org/abs/2002.11648v2",
            "abstract": "In competitive adversarial environments, it is often advantageous to obfuscate one’s strategies or capabilities. However, revealing one’s strategic intentions may shift the dynamics of the competition in complex ways. Can it ever be advantageous to reveal strategic intentions to an opponent? In this paper, we consider three-stage Colonel Blotto games in which one player can choose whether or not to pre-commit resources to a single battlefield before play begins. This pre-commitment is public knowledge. In response, the opponent can either secure the battlefield by matching the pre-commitment with its own forces, or withdraw. In a two-player setting, we show that a weaker player never has an incentive to pre-commit any amount of resources to a battlefield regardless of how valuable it is. We then consider a three-player setting in which two players fight against a common adversary on separate fronts. Only one of the two players facing the adversary has the option of pre-committing. We find there are instances where this player benefits from pre-committing. The analysis indicates that under non-cooperative team settings and no possibility of forming alliances, there can be incentives to publicly announce one’s strategic intentions to an adversary."
        },
        "c4":{
            "title": "Characterizing the interplay between information and strength in Blotto games",
            "authors": "K. Paarporn, <b>R. Chandan</b>, M. Alizadeh and J. R. Marden",
            "conference": "CDC 2019",
            "conferencelong": "58th IEEE Conference on Decision and Control (CDC)",
            "date": "2019",
            "status": "in proceedings",
            "pdfFile": "./publications/paarporn2019characterizing.pdf",
            "url": "https://arxiv.org/abs/1909.03382v2",
            "abstract": "In competitive interactions between two opposing adversaries, informational asymmetries may provide an advantage to one competitor over the other. The application domains of this interplay are numerous, such as the security of cyber-physical systems, politics, and advertising campaigns. Hence it is important to identify the value information offers in these contests. In this paper, we investigate informational asymmetries in the Colonel Blotto game, which is a gametheoretic model of competitive resource allocation between two players over a finite set of battlefields. We consider a case where the battlefield valuations are subject to randomness, and one of the two players knows the valuations with certainty. The other knows only a distribution on the battlefield realizations. However, the informed player has fewer resources to allocate. We study a two battlefield setup in the Colonel Blotto game. We then focus on a three battlefield setup in the General Lotto game, a popular variant of the Colonel Blotto game. We characterize mixed equilibrium strategies and the equilibrium payoff as a function of the players’ budgets and battlefield valuations. This allows us to identify the parameter ranges in which the informed player has the competitive advantage. In a setting where both are uninformed and the weaker resource player has the option to exchange resources for information, we quantify the value of information when information costs a fraction of its budget."
        },
        "c3":{
            "title": "When smoothness is not enough: Toward exact quantification and optimization of the price-of-anarchy",
            "authors": "<b>R. Chandan</b>, D. Paccagnan and J. R. Marden",
            "conference": "CDC 2019",
            "conferencelong": "58th IEEE Conference on Decision and Control (CDC)",
            "date": "2019",
            "status": "in proceedings, presented",
            "pdfFile": "./publications/chandan2019when.pdf",
            "url": "https://arxiv.org/abs/1904.10915",
            "abstract": "Today's multiagent systems have grown too complex to rely on centralized controllers, prompting increasing interest in the design of distributed algorithms. In this respect, game theory has emerged as a valuable tool to complement more traditional techniques. The fundamental idea behind this approach is the assignment of agents' local cost functions, such that their selfish minimization attains, or is provably close to, the global objective. Any algorithm capable of computing an equilibrium of the corresponding game will inherit an approximation ratio that is, in the worst case, equal to the price-of-anarchy of the considered class of equilibria. Therefore, a successful application of the game design approach hinges on the possibility to quantify and optimize the equilibrium performance.\nToward this end, we introduce the notion of generalized smoothness, and show that the resulting efficiency bounds are significantly tighter compared to those obtained using the traditional smoothness approach. Leveraging this newly-introduced notion, we quantify the equilibrium performance for the class of local resource allocation games. Finally, we show how the agents' local decision rules can be designed in order to optimize the efficiency of the corresponding equilibria, by means of a tractable linear program."
        },
        "c2":{
            "title": "Computing optimal taxes in atomic congestion games",
            "authors": "<b>R. Chandan</b>, D. Paccagnan, B. L. Ferguson and J. R. Marden",
            "conference": "NetEcon 2019",
            "conferencelong": "The 14th Workshop on the Economics of Networks, Systems and Computation (NetEcon)",
            "date": "2019",
            "status": "in proceedings, presented",
            "pdfFile": "",
            "url": "https://netecon19.inria.fr/files/2019/06/article-2-chandan.pdf",
            "abstract": "When the performance of a system is dictated by the behaviour of its users, self-interested choices can result in sub-optimal system operation, as is the case in road traffic networks. The inefficiency resulting from such selfish behaviour is commonly measured by the ratio between the emergent worst-case system cost and the minimum system cost, termed price-of-anarchy. As the degree of inefficiency can be significant even for relatively simple systems (e.g., affine congestion games), researchers have proposed a variety of approaches to align the emergent selfish behaviour with the desired system objective. A well-studied and promising method is that of altering users' perceived costs by means of taxes."
        },
        "c1":{
            "title": "Optimal Price of Anarchy in Cost-Sharing Games",
            "authors": "<b>R. Chandan</b>, D. Paccagnan and J. R. Marden",
            "conference": "ACC 2019",
            "conferencelong": "2019 American Control Conference (ACC)",
            "date": "2019",
            "status": "in proceedings, presented",
            "pdfFile": "./publications/chandan2019optimal.pdf",
            "url": "https://arxiv.org/abs/1903.06288",
            "abstract": "The design of distributed algorithms is central to the study of multiagent systems control. In this paper, we consider a class of combinatorial cost-minimization problems and propose a framework for designing distributed algorithms with a priori performance guarantees that are near-optimal. We approach this problem from a game-theoretic perspective, assigning agents cost functions such that the equilibrium efficiency (price of anarchy) is optimized. Once agents' cost functions have been specified, any algorithm capable of computing a Nash equilibrium of the system inherits a performance guarantee matching the price of anarchy. Towards this goal, we formulate the problem of computing the price of anarchy as a tractable linear program. We then present a framework for designing agents' local cost functions in order to optimize for the worst-case equilibrium efficiency. Finally, we investigate the implications of our findings when this framework is applied to systems with convex, nondecreasing costs."
        }
    }
}
