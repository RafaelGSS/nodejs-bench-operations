## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|91,920,370|45960544|
|(short string) (true) String#slice and strict comparison|60,411,860|30205939|
|(long string) (true) String#endsWith|65,636,826|32840904|
|(long string) (true) String#slice and strict comparison|53,845,775|26922904|
|(short string) (false) String#endsWith|96,158,942|48079486|
|(short string) (false) String#slice and strict comparison|59,686,071|29852662|
|(long string) (false) String#endsWith|89,449,887|44748864|
|(long string) (false) String#slice and strict comparison|54,038,595|27020891|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:35:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":45960544,"opsSec":91920370.1019095},{"name":"(short string) (true) String#slice and strict comparison","samples":30205939,"opsSec":60411860.72220784},{"name":"(long string) (true) String#endsWith","samples":32840904,"opsSec":65636826.55766542},{"name":"(long string) (true) String#slice and strict comparison","samples":26922904,"opsSec":53845775.15407715},{"name":"(short string) (false) String#endsWith","samples":48079486,"opsSec":96158942.19072793},{"name":"(short string) (false) String#slice and strict comparison","samples":29852662,"opsSec":59686071.422057815},{"name":"(long string) (false) String#endsWith","samples":44748864,"opsSec":89449887.69546361},{"name":"(long string) (false) String#slice and strict comparison","samples":27020891,"opsSec":54038595.66824502}]}-->
