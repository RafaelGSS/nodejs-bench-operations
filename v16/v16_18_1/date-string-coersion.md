## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|545,616|84|
|Using brackets {}|563,186|90|
|Using '' + |563,824|91|
|Using date.toString()|609,251|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using String()","hz":545615.5698279435,"cycles":6,"stats":{"deviation":7.779029989192818e-8,"mean":0.000001832792272250119,"moe":1.663573042077688e-8,"rme":0.907671353303623,"sem":8.487617561620856e-9,"variance":6.051330757276121e-15}},{"name":"Using brackets {}","hz":563186.2870217402,"cycles":4,"stats":{"deviation":4.850129729072185e-8,"mean":0.0000017756114149870944,"moe":1.0020471835560143e-8,"rme":0.564339232727504,"sem":5.112485630387828e-9,"variance":2.3523758388829826e-15}},{"name":"Using '' + ","hz":563823.5646706673,"cycles":5,"stats":{"deviation":7.007107943135972e-8,"mean":0.0000017736044795930195,"moe":1.4397072211883773e-8,"rme":0.8117408575325317,"sem":7.34544500606315e-9,"variance":4.909956172675924e-15}},{"name":"Using date.toString()","hz":609251.3877769202,"cycles":5,"stats":{"deviation":6.322440856463162e-8,"mean":0.000001641358591974441,"moe":1.3209899413196467e-8,"rme":0.8048149549883473,"sem":6.739744598569626e-9,"variance":3.997325838347464e-15}}]}-->
