## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,343,053|5171527|
|{ ...object, __proto__: null }|2,130,255|1065128|
|{ ...object, newProp: true }|10,380,794|5190398|
|structuredClone|292,557|146279|
|JSON.parse + JSON.stringify|272,924|136463|
|loop + object.keys starting with {}|1,466,908|733455|
|loop + object.keys starting with { __proto__: null }|809,043|404522|
|loop + object.keys starting with { randomProp: true }|568,485|284243|
|object.keys + reduce(FN, {})|1,471,989|735995|
|object.keys + reduce(FN, { __proto__: null })|783,425|391713|
|object.keys + reduce(FN, { newProp: true })|574,178|287090|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:15:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10343053.462101737,"samples":5171527},{"name":"{ ...object, __proto__: null }","opsSec":2130255.786975233,"samples":1065128},{"name":"{ ...object, newProp: true }","opsSec":10380794.546613572,"samples":5190398},{"name":"structuredClone","opsSec":292557.3218525327,"samples":146279},{"name":"JSON.parse + JSON.stringify","opsSec":272924.4481519501,"samples":136463},{"name":"loop + object.keys starting with {}","opsSec":1466908.4656122862,"samples":733455},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":809043.8074475498,"samples":404522},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":568485.6464016056,"samples":284243},{"name":"object.keys + reduce(FN, {})","opsSec":1471989.0726428002,"samples":735995},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":783425.5722492989,"samples":391713},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":574178.5301026909,"samples":287090}]}-->
