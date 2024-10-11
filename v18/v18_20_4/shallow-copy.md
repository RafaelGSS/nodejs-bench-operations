## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,561,807|10782758|
|{ ...object, __proto__: null }|19,781,542|9892436|
|{ ...object, newProp: true }|601,395|305153|
|structuredClone|252,558|126280|
|JSON.parse + JSON.stringify|199,689|99914|
|loop + object.keys starting with {}|1,288,532|644267|
|loop + object.keys starting with { __proto__: null }|756,165|378092|
|loop + object.keys starting with { randomProp: true }|533,401|266701|
|object.keys + reduce(FN, {})|1,315,521|657840|
|object.keys + reduce(FN, { __proto__: null })|789,206|394660|
|object.keys + reduce(FN, { newProp: true })|545,604|272875|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:22:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{ ...object }","opsSec":21561807.239783917,"samples":10782758},{"name":"{ ...object, __proto__: null }","opsSec":19781542.64768314,"samples":9892436},{"name":"{ ...object, newProp: true }","opsSec":601395.9023381048,"samples":305153},{"name":"structuredClone","opsSec":252558.7649876392,"samples":126280},{"name":"JSON.parse + JSON.stringify","opsSec":199689.98746020667,"samples":99914},{"name":"loop + object.keys starting with {}","opsSec":1288532.7140443514,"samples":644267},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":756165.661470378,"samples":378092},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":533401.5540763008,"samples":266701},{"name":"object.keys + reduce(FN, {})","opsSec":1315521.821656164,"samples":657840},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":789206.6809695063,"samples":394660},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":545604.0389163011,"samples":272875}]}-->
