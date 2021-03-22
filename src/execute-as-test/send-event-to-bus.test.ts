import { sendCommand } from '@uptime.app/message-bus';
import { createContext } from '@uptime.app/test-helpers';

describe('sending something to the bus', () => {
    test('it sends the command', async () => {
        await sendCommand(command, createContext());
    });
});


const command = {
    'id': '5867bb30-5e1a-445e-aa65-67591fc987ea',
    'type': 'UpdateSegment',
    'payload': {
        'segmentId': 'ac18ced7-9037-47cc-9032-0586ecc87883',
        'type': 'overview',
        'subSegments': [
            {
                'type': 'favourite-quote',
                'markdown': '"There\'s no point in being unhappy about things you can\'t change, and no point being unhappy about things you can." \\[Dan Harris\\]',
                'cards': [
                    {
                        'markdown': '"There\'s no point in being unhappy about things you can\'t change, and no point being unhappy about things you can." \\[Dan Harris\\]'
                    }
                ],
                'keywords': [],
                'source': {
                    'id': 'a0fc09e4-e016-4cff-901c-48114f30dcd8',
                    'type': 'book'
                }
            },
            {
                'type': 'in-a-nutshell',
                'markdown': '10% Happier gives skeptics an easy \'in\' to meditation, taking a very non-fluffy approach to the science behind this mindfulness practice.  Letting go of your ego is critical for living a stress-free life, and this handy guide pinpoints how and why we should do it. ![giphy.com/MindfulVibing](https://media.giphy.com/media/T6qTipNlmgXt0qAGSw/giphy.gif)',
                'cards': [
                    {
                        'markdown': '10% Happier gives skeptics an easy \'in\' to meditation, taking a very non-fluffy approach to the science behind this mindfulness practice.'
                    },
                    {
                        'markdown': ' Letting go of your ego is critical for living a stress-free life, and this handy guide pinpoints how and why we should do it. ![giphy.com/MindfulVibing](https://media.giphy.com/media/T6qTipNlmgXt0qAGSw/giphy.gif)'
                    }
                ],
                'keywords': [],
                'source': {
                    'id': 'a0fc09e4-e016-4cff-901c-48114f30dcd8',
                    'type': 'book'
                }
            },
            {
                'type': 'introduction',
                'markdown': 'Life as an ABC News correspondent must feel pretty good, right? The pay is great, millions of people know your face and name. ![giphy.com/GoodMorningAmerica](https://media.giphy.com/media/jt301Jk3iV2hd99274/giphy.gif)   But for some, the pressure can become too much – and they crack. ![giphy.com/FridayTV](https://media.giphy.com/media/TdGCK3hp5DFJdn84fx/giphy.gif)\n\nThis happened to author Dan Harris 12 years ago, when his voice broke in a live, on-air panic attack on national television. [youtube.com/c/ABCNews](https://youtu.be/_qo4uPxhUzU?t=54.32&e=95.24)   Embarrassed and humiliated, Harris was driven into self-reflection.  There began his long journey into the science of stress, which in turn introduced him to mindfulness.   Although originally a skeptic himself, Harris eventually learned to tame his ego with the power of meditation. In his 2014 bestseller, he shares those lessons with us. ![giphy.com/lillamraz](https://media.giphy.com/media/W2WLGDytcJ4cAUPRJi/giphy.gif)',
                'cards': [
                    {
                        'markdown': 'Life as an ABC News correspondent must feel pretty good, right? The pay is great, millions of people know your face and name. ![giphy.com/GoodMorningAmerica](https://media.giphy.com/media/jt301Jk3iV2hd99274/giphy.gif) '
                    },
                    {
                        'markdown': ' But for some, the pressure can become too much – and they crack. ![giphy.com/FridayTV](https://media.giphy.com/media/TdGCK3hp5DFJdn84fx/giphy.gif)'
                    },
                    {
                        'markdown': 'This happened to author Dan Harris 12 years ago, when his voice broke in a live, on-air panic attack on national television. [youtube.com/c/ABCNews](https://youtu.be/_qo4uPxhUzU?t=54.32&e=95.24) '
                    },
                    {
                        'markdown': ' Embarrassed and humiliated, Harris was driven into self-reflection.'
                    },
                    {
                        'markdown': ' There began his long journey into the science of stress, which in turn introduced him to mindfulness. '
                    },
                    {
                        'markdown': ' Although originally a skeptic himself, Harris eventually learned to tame his ego with the power of meditation. In his 2014 bestseller, he shares those lessons with us. ![giphy.com/lillamraz](https://media.giphy.com/media/W2WLGDytcJ4cAUPRJi/giphy.gif)'
                    }
                ],
                'keywords': [],
                'source': {
                    'id': 'a0fc09e4-e016-4cff-901c-48114f30dcd8',
                    'type': 'book'
                }
            },
            {
                'type': 'insight-one',
                'title': 'Your ego gets in the way of your happiness by constantly wanting more',
                'markdown': 'The friction between acting in the present, but constantly thinking about the future and past, is what gives our ego its insatiable appetite.  Our ego constantly assesses our worth by looking at our wealth, looks and social status, and then finding the next best person with more of it to compare it against.\n\nTherefore, our ego\'s default setting is always more. ![https://giphy.com/mushisca/](https://media.giphy.com/media/YQ5TIv9sGI7T2O0D3y/giphy.gif)  The minute we feed our ego a new achievement, toy or compliment, the baseline for desire is reset, and it starts hunting for its next goal. Our egos thrive on drama and worry, and will instantly look for the next bigger achievement to compare yourself to.  If none is there, it\'ll dig up some ancient problem or crisis, and pester us with it instead...\n\nThat\'s why the ego is never happy, and it\'s up to us to take charge of that, because no matter which new heights we reach, it\'ll never be enough. Time to reign it in! ![giphy.com/lucasscanto](https://media.giphy.com/media/McbLbWpEdwxTXnmax1/giphy.gif)',
                'cards': [
                    {
                        'markdown': 'Your ego gets in the way of your happiness by constantly wanting more'
                    },
                    {
                        'markdown': 'The friction between acting in the present, but constantly thinking about the future and past, is what gives our ego its insatiable appetite.'
                    },
                    {
                        'markdown': 'Our ego constantly assesses our worth by looking at our wealth, looks and social status, and then finding the next best person with more of it to compare it against.'
                    },
                    {
                        'markdown': 'Therefore, our ego\'s default setting is always more. ![https://giphy.com/mushisca/](https://media.giphy.com/media/YQ5TIv9sGI7T2O0D3y/giphy.gif)'
                    },
                    {
                        'markdown': 'The minute we feed our ego a new achievement, toy or compliment, the baseline for desire is reset, and it starts hunting for its next goal.'
                    },
                    {
                        'markdown': 'Our egos thrive on drama and worry, and will instantly look for the next bigger achievement to compare yourself to.'
                    },
                    {
                        'markdown': 'If none is there, it\'ll dig up some ancient problem or crisis, and pester us with it instead...'
                    },
                    {
                        'markdown': 'That\'s why the ego is never happy, and it\'s up to us to take charge of that, because no matter which new heights we reach, it\'ll never be enough. Time to reign it in! ![giphy.com/lucasscanto](https://media.giphy.com/media/McbLbWpEdwxTXnmax1/giphy.gif)'
                    }
                ],
                'actions': [
                    {
                        'title': 'Stop comparing yourself to others.',
                        'markdown': 'In our social media age, it’s easy to identify others who are seemingly smarter, more successful, or better looking than ourselves. But remember there’s much more to social media than meets the eye - and no one does YOU like you do. Celebrate that!',
                        'cards': [
                            {
                                'markdown': '## Stop comparing yourself to others.\nIn our social media age, it’s easy to identify others who are seemingly smarter, more successful, or better looking than ourselves. But remember there’s much more to social media than meets the eye - and no one does YOU like you do. Celebrate that!'
                            }
                        ]
                    }
                ],
                'keywords': [
                    'happiness',
                    'psychology'
                ],
                'source': {
                    'id': 'a0fc09e4-e016-4cff-901c-48114f30dcd8',
                    'type': 'book'
                }
            },
            {
                'type': 'insight-two',
                'title': 'Be simple, not a simpleton - why letting go of your ego won’t make you a pushover',
                'markdown': 'Now, we might say, "If my ego is my drive to achieve greater things, won\'t I lose my edge if I completely let go of it?" Nope! That doesn\'t have to be the case at all. Quite the contrary. ![giphy.com/originals/](https://media.giphy.com/media/X7hRO9V7SAwaeCf9vb/giphy.gif)  Often people overdo it with the Buddhist attitude of letting go, and in some cases even end up letting other people order for them at restaurants in order not to express personal preference. ![giphy.com/lerabling/](https://media.giphy.com/media/UD2vKWlBBjtCjVB6OU/giphy.gif)\n\nIndian meditation teacher Munindra taught his students to keep things simple and easy.  When one of them approached him during his fierce negotiation over the price of a bag of peanuts at the local market, they asked how this matched his earlier lesson. Munindra replied: "I said be simple, not a simpleton!"\n\nMindfulness should make us more creative and productive, but not a pushover.  Meditation removes the need for competition, fuelling our drive by removing wrong assumptions and bad thoughts. ![giphy.com/lerabling/](https://media.giphy.com/media/cJ53VLbM1eEo4s1toi/giphy.gif)  Instead of the usual stress, we\'ll approach things more clearly, because we\'re not giving in to aggressive temptations.  Author Dan Harris found himself filling pages upon pages with notes during a meditation retreat, because his mind was less cluttered and chaotic, and his creativity flowed freely. ![giphy.com/nightline/](https://media.giphy.com/media/21LLW7sxQBbFKmyGl7/giphy.gif)',
                'cards': [
                    {
                        'markdown': 'Be simple, not a simpleton - why letting go of your ego won’t make you a pushover'
                    },
                    {
                        'markdown': 'Now, we might say, "If my ego is my drive to achieve greater things, won\'t I lose my edge if I completely let go of it?"'
                    },
                    {
                        'markdown': 'Nope! That doesn\'t have to be the case at all. Quite the contrary. ![giphy.com/originals/](https://media.giphy.com/media/X7hRO9V7SAwaeCf9vb/giphy.gif)'
                    },
                    {
                        'markdown': 'Often people overdo it with the Buddhist attitude of letting go, and in some cases even end up letting other people order for them at restaurants in order not to express personal preference. ![giphy.com/lerabling/](https://media.giphy.com/media/UD2vKWlBBjtCjVB6OU/giphy.gif)'
                    },
                    {
                        'markdown': 'Indian meditation teacher Munindra taught his students to keep things simple and easy.'
                    },
                    {
                        'markdown': 'When one of them approached him during his fierce negotiation over the price of a bag of peanuts at the local market, they asked how this matched his earlier lesson.'
                    },
                    {
                        'markdown': 'Munindra replied: "I said be simple, not a simpleton!"'
                    },
                    {
                        'markdown': 'Mindfulness should make us more creative and productive, but not a pushover.'
                    },
                    {
                        'markdown': 'Meditation removes the need for competition, fuelling our drive by removing wrong assumptions and bad thoughts. ![giphy.com/lerabling/](https://media.giphy.com/media/cJ53VLbM1eEo4s1toi/giphy.gif)'
                    },
                    {
                        'markdown': 'Instead of the usual stress, we\'ll approach things more clearly, because we\'re not giving in to aggressive temptations.'
                    },
                    {
                        'markdown': 'Author Dan Harris found himself filling pages upon pages with notes during a meditation retreat, because his mind was less cluttered and chaotic, and his creativity flowed freely. ![giphy.com/nightline/](https://media.giphy.com/media/21LLW7sxQBbFKmyGl7/giphy.gif)'
                    }
                ],
                'actions': [
                    {
                        'title': 'Practice mediation to bring yourself back in balance.',
                        'markdown': 'Throughout your day, pay close attention to the things that get you down. Beating ourselves up over things we can’t control - like something embarrassing things we said at a party, for example - is not useful to us. Keep moving forward!',
                        'cards': [
                            {
                                'markdown': '## Practice mediation to bring yourself back in balance.\nThroughout your day, pay close attention to the things that get you down. Beating ourselves up over things we can’t control - like something embarrassing things we said at a party, for example - is not useful to us. Keep moving forward!'
                            }
                        ]
                    }
                ],
                'keywords': [
                    'happiness',
                    'confidence'
                ],
                'source': {
                    'id': 'a0fc09e4-e016-4cff-901c-48114f30dcd8',
                    'type': 'book'
                }
            },
            {
                'type': 'insight-three',
                'title': 'Meditation makes you more mindful and compassionate by giving us a fourth habitual response',
                'markdown': 'So, what is it that meditation can help us do to tame the ego and fuel our drive? ![giphy.com/acosyreader](https://media.giphy.com/media/HnEAk9WH9oAI5ci1sD/giphy.gif)  Meditation makes us more mindful. It helps us live in the moment, as well as act more compassionately towards others. Its method of achieving this is by giving us a fourth habitual response.\n\nAccording to ancient Buddhist wisdom, we usually exhibit three characteristic habitual responses to all of our experiences...\n\n1.  **We want it.** Ever passed by a hamburger place when hungry? Yeah. That. ![giphy.com/FeliVillarreal/](https://media.giphy.com/media/60rUE5e0SYRPRl3vcS/giphy.gif) \n2.  **We reject it.** Ever had a spider land on your hand? Our instinct is normally to instantly throw it off. ![/giphy.com/donatellostudio/](https://media.giphy.com/media/erYRc7cubyPfK5hfIB/giphy.gif) \n3.  **We zone out.** Because we always listen to the flight attendant\'s safety instructions all the way to the end, right?...Yeah. Exactly. ![giphy.com/Harrrumph/](https://media.giphy.com/media/61TfdMnEQupbuWNJTH/giphy.gif)\n\nOnce we start meditating, though, we\'ll be able to choose a fourth alternative: Observing without judging. It usually starts with physical pain. Our legs will become sore, or our nose itches, but we should (and can) resist the urge to scratch it, and just let it be. After a while, this can-do attitude towards pain transfers to our emotions and thoughts as well. ![giphy.com/gaiama/](https://media.giphy.com/media/I1DjUddBdgy3rOS11m/giphy.gif)  We start to catch ourselves while gossiping, acting out on a bad habit, or thinking negative thoughts. ![giphy.com/yipan/](https://media.giphy.com/media/5Y9yzaDoGw6p3Iuvw2/giphy.gif)  The important thing to know is that we can just observe your feelings until they pass by, without reacting to them. It\'s this little pause between thinking and acting that makes us realize that, often, no action is necessary, thus helps us to make better choices altogether.',
                'cards': [
                    {
                        'markdown': 'Meditation makes you more mindful and compassionate by giving us a fourth habitual response'
                    },
                    {
                        'markdown': 'So, what is it that meditation can help us do to tame the ego and fuel our drive? ![giphy.com/acosyreader](https://media.giphy.com/media/HnEAk9WH9oAI5ci1sD/giphy.gif)'
                    },
                    {
                        'markdown': 'Meditation makes us more mindful. It helps us live in the moment, as well as act more compassionately towards others.'
                    },
                    {
                        'markdown': 'Its method of achieving this is by giving us a fourth habitual response.'
                    },
                    {
                        'markdown': 'According to ancient Buddhist wisdom, we usually exhibit three characteristic habitual responses to all of our experiences...'
                    },
                    {
                        'markdown': '1.  **We want it.** Ever passed by a hamburger place when hungry? Yeah. That. ![giphy.com/FeliVillarreal/](https://media.giphy.com/media/60rUE5e0SYRPRl3vcS/giphy.gif)'
                    },
                    {
                        'markdown': '2.  **We reject it.** Ever had a spider land on your hand? Our instinct is normally to instantly throw it off. ![/giphy.com/donatellostudio/](https://media.giphy.com/media/erYRc7cubyPfK5hfIB/giphy.gif)'
                    },
                    {
                        'markdown': '3.  **We zone out.** Because we always listen to the flight attendant\'s safety instructions all the way to the end, right?...Yeah. Exactly. ![giphy.com/Harrrumph/](https://media.giphy.com/media/61TfdMnEQupbuWNJTH/giphy.gif)'
                    },
                    {
                        'markdown': 'Once we start meditating, though, we\'ll be able to choose a fourth alternative: Observing without judging.'
                    },
                    {
                        'markdown': 'It usually starts with physical pain. Our legs will become sore, or our nose itches, but we should (and can) resist the urge to scratch it, and just let it be.'
                    },
                    {
                        'markdown': 'After a while, this can-do attitude towards pain transfers to our emotions and thoughts as well. ![giphy.com/gaiama/](https://media.giphy.com/media/I1DjUddBdgy3rOS11m/giphy.gif)'
                    },
                    {
                        'markdown': 'We start to catch ourselves while gossiping, acting out on a bad habit, or thinking negative thoughts. ![giphy.com/yipan/](https://media.giphy.com/media/5Y9yzaDoGw6p3Iuvw2/giphy.gif)'
                    },
                    {
                        'markdown': 'The important thing to know is that we can just observe your feelings until they pass by, without reacting to them.'
                    },
                    {
                        'markdown': 'It\'s this little pause between thinking and acting that makes us realize that, often, no action is necessary, thus helps us to make better choices altogether.'
                    }
                ],
                'actions': [
                    {
                        'title': 'Reflect on painful emotions before acting on them.',
                        'markdown': 'Negative feelings, whether it be jealousy, anger, or anxiety, are human emotions. We all experience them. But don’t let them control you. Understand that these feelings are temporary - take a moment to cool down before acting rashly.',
                        'cards': [
                            {
                                'markdown': '## Reflect on painful emotions before acting on them.\nNegative feelings, whether it be jealousy, anger, or anxiety, are human emotions. We all experience them. But don’t let them control you. Understand that these feelings are temporary - take a moment to cool down before acting rashly.'
                            }
                        ]
                    }
                ],
                'keywords': [
                    'meditation',
                    'mindfulness'
                ],
                'source': {
                    'id': 'a0fc09e4-e016-4cff-901c-48114f30dcd8',
                    'type': 'book'
                }
            },
            {
                'type': 'conclusion',
                'markdown': 'It takes a lot of guts to write a book about one of your most embarrassing moments in life –but the boldness sure paid off!   This book is perfect for any meditation-skeptics, because Harris was one too. ![giphy.com/nightline/](https://media.giphy.com/media/l1BTwZS5q3EhvpKbo0/giphy.gif)   The good news is that it\'s really simple to give meditation a try. ![giphy.com/nightline](https://media.giphy.com/media/1nQ76lGELfu44IbH57/giphy.gif)   Simply sit and focus on your breath. If your thoughts wander off, bring them back - that\'s all there is to it.   10% Happier explains meditation techniques and focuses on the benefits, both of which are much more important for beginners.',
                'cards': [
                    {
                        'markdown': 'It takes a lot of guts to write a book about one of your most embarrassing moments in life –but the boldness sure paid off! '
                    },
                    {
                        'markdown': ' This book is perfect for any meditation-skeptics, because Harris was one too. ![giphy.com/nightline/](https://media.giphy.com/media/l1BTwZS5q3EhvpKbo0/giphy.gif) '
                    },
                    {
                        'markdown': ' The good news is that it\'s really simple to give meditation a try. ![giphy.com/nightline](https://media.giphy.com/media/1nQ76lGELfu44IbH57/giphy.gif) '
                    },
                    {
                        'markdown': ' Simply sit and focus on your breath. If your thoughts wander off, bring them back - that\'s all there is to it. '
                    },
                    {
                        'markdown': ' 10% Happier explains meditation techniques and focuses on the benefits, both of which are much more important for beginners.'
                    }
                ],
                'keywords': [],
                'source': {
                    'id': 'a0fc09e4-e016-4cff-901c-48114f30dcd8',
                    'type': 'book'
                }
            }
        ],
        'source': {
            'id': 'a0fc09e4-e016-4cff-901c-48114f30dcd8',
            'type': 'book'
        }
    }
};
