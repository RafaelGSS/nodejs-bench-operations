## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,390,502|9717743|
|{ ...object, __proto__: null }|19,609,150|9804596|
|{ ...object, newProp: true }|567,775|288628|
|structuredClone|255,559|127784|
|JSON.parse + JSON.stringify|198,256|99212|
|loop + object.keys starting with {}|1,229,707|614860|
|loop + object.keys starting with { __proto__: null }|700,097|350129|
|loop + object.keys starting with { randomProp: true }|503,674|251900|
|object.keys + reduce(FN, {})|1,253,365|626779|
|object.keys + reduce(FN, { __proto__: null })|718,310|359318|
|object.keys + reduce(FN, { newProp: true })|507,298|253691|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:06:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":9717743,"opsSec":19390502.67091185},{"name":"{ ...object, __proto__: null }","samples":9804596,"opsSec":19609150.467819307},{"name":"{ ...object, newProp: true }","samples":288628,"opsSec":567775.6758017809},{"name":"structuredClone","samples":127784,"opsSec":255559.14947553538},{"name":"JSON.parse + JSON.stringify","samples":99212,"opsSec":198256.23161168557},{"name":"loop + object.keys starting with {}","samples":614860,"opsSec":1229707.213504394},{"name":"loop + object.keys starting with { __proto__: null }","samples":350129,"opsSec":700097.9296093741},{"name":"loop + object.keys starting with { randomProp: true }","samples":251900,"opsSec":503674.3292254636},{"name":"object.keys + reduce(FN, {})","samples":626779,"opsSec":1253365.3076176068},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":359318,"opsSec":718310.0596273434},{"name":"object.keys + reduce(FN, { newProp: true })","samples":253691,"opsSec":507298.83444367896}]}-->
