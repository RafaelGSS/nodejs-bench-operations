## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|82,111,201|41056032|
|(short string) (true) String#slice and strict comparison|55,864,649|27932332|
|(long string) (true) String#startsWith|66,531,666|33265839|
|(long string) (true) String#slice and strict comparison|51,090,497|25545723|
|(short string) (false) String#startsWith|91,084,832|45542437|
|(short string) (false) String#slice and strict comparison|56,278,749|28159155|
|(long string) (false) String#startsWith|86,112,586|43056315|
|(long string) (false) String#slice and strict comparison|51,953,593|25977072|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:48:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":41056032,"opsSec":82111201.5039394},{"name":"(short string) (true) String#slice and strict comparison","samples":27932332,"opsSec":55864649.92210822},{"name":"(long string) (true) String#startsWith","samples":33265839,"opsSec":66531666.15736342},{"name":"(long string) (true) String#slice and strict comparison","samples":25545723,"opsSec":51090497.249466084},{"name":"(short string) (false) String#startsWith","samples":45542437,"opsSec":91084832.4653164},{"name":"(short string) (false) String#slice and strict comparison","samples":28159155,"opsSec":56278749.4158856},{"name":"(long string) (false) String#startsWith","samples":43056315,"opsSec":86112586.59925635},{"name":"(long string) (false) String#slice and strict comparison","samples":25977072,"opsSec":51953593.70753545}]}-->
