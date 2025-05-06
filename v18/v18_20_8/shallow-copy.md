## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,769,991|9892450|
|{ ...object, __proto__: null }|19,989,097|9998921|
|{ ...object, newProp: true }|589,375|302538|
|structuredClone|258,165|129120|
|JSON.parse + JSON.stringify|194,678|97344|
|loop + object.keys starting with {}|1,246,594|623547|
|loop + object.keys starting with { __proto__: null }|675,184|337655|
|loop + object.keys starting with { randomProp: true }|496,199|248447|
|object.keys + reduce(FN, {})|1,261,085|630768|
|object.keys + reduce(FN, { __proto__: null })|674,193|337206|
|object.keys + reduce(FN, { newProp: true })|492,637|246504|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:39:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":9892450,"opsSec":19769991.01483591},{"name":"{ ...object, __proto__: null }","samples":9998921,"opsSec":19989097.16977017},{"name":"{ ...object, newProp: true }","samples":302538,"opsSec":589375.9810124222},{"name":"structuredClone","samples":129120,"opsSec":258165.89296409287},{"name":"JSON.parse + JSON.stringify","samples":97344,"opsSec":194678.89564676618},{"name":"loop + object.keys starting with {}","samples":623547,"opsSec":1246594.297689394},{"name":"loop + object.keys starting with { __proto__: null }","samples":337655,"opsSec":675184.0255148874},{"name":"loop + object.keys starting with { randomProp: true }","samples":248447,"opsSec":496199.4636563267},{"name":"object.keys + reduce(FN, {})","samples":630768,"opsSec":1261085.4872983466},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":337206,"opsSec":674193.6435111269},{"name":"object.keys + reduce(FN, { newProp: true })","samples":246504,"opsSec":492637.27862454037}]}-->
