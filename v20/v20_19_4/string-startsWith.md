## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|89,288,676|44678137|
|(short string) (true) String#slice and strict comparison|64,477,327|32258173|
|(long string) (true) String#startsWith|64,644,172|32322186|
|(long string) (true) String#slice and strict comparison|59,860,451|29933448|
|(short string) (false) String#startsWith|100,613,984|50307481|
|(short string) (false) String#slice and strict comparison|63,827,400|31913717|
|(long string) (false) String#startsWith|91,802,806|45901411|
|(long string) (false) String#slice and strict comparison|58,736,181|29393145|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:05:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44678137,"opsSec":89288676.75721946},{"name":"(short string) (true) String#slice and strict comparison","samples":32258173,"opsSec":64477327.029729344},{"name":"(long string) (true) String#startsWith","samples":32322186,"opsSec":64644172.895947486},{"name":"(long string) (true) String#slice and strict comparison","samples":29933448,"opsSec":59860451.66321575},{"name":"(short string) (false) String#startsWith","samples":50307481,"opsSec":100613984.43452722},{"name":"(short string) (false) String#slice and strict comparison","samples":31913717,"opsSec":63827400.809751585},{"name":"(long string) (false) String#startsWith","samples":45901411,"opsSec":91802806.94433966},{"name":"(long string) (false) String#slice and strict comparison","samples":29393145,"opsSec":58736181.69350781}]}-->
