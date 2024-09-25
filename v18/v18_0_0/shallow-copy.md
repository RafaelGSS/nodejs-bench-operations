## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,531,937|4765969|
|{ ...object, __proto__: null }|10,024,485|5012243|
|{ ...object, newProp: true }|616,682|309765|
|structuredClone|235,862|117932|
|JSON.parse + JSON.stringify|185,835|92918|
|loop + object.keys starting with {}|1,123,144|561573|
|loop + object.keys starting with { __proto__: null }|599,716|299859|
|loop + object.keys starting with { randomProp: true }|461,303|230652|
|object.keys + reduce(FN, {})|1,068,303|534152|
|object.keys + reduce(FN, { __proto__: null })|561,682|280842|
|object.keys + reduce(FN, { newProp: true })|462,029|231015|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:48:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9531937.661596991,"samples":4765969},{"name":"{ ...object, __proto__: null }","opsSec":10024485.620882504,"samples":5012243},{"name":"{ ...object, newProp: true }","opsSec":616682.3440815952,"samples":309765},{"name":"structuredClone","opsSec":235862.30728850554,"samples":117932},{"name":"JSON.parse + JSON.stringify","opsSec":185835.14291400646,"samples":92918},{"name":"loop + object.keys starting with {}","opsSec":1123144.8199248489,"samples":561573},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":599716.0457424538,"samples":299859},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":461303.2053383331,"samples":230652},{"name":"object.keys + reduce(FN, {})","opsSec":1068303.878303467,"samples":534152},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":561682.1078123545,"samples":280842},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":462029.551036819,"samples":231015}]}-->
