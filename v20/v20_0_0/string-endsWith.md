## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,969,723|27491356|
|(short string) (true) String#slice and strict comparison|63,184,074|31663164|
|(long string) (true) String#endsWith|51,061,487|25534987|
|(long string) (true) String#slice and strict comparison|57,814,785|28954709|
|(short string) (false) String#endsWith|59,608,258|29804146|
|(short string) (false) String#slice and strict comparison|62,693,899|31346958|
|(long string) (false) String#endsWith|54,789,713|27407393|
|(long string) (false) String#slice and strict comparison|57,735,789|28884430|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:38:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27491356,"opsSec":54969723.86358496},{"name":"(short string) (true) String#slice and strict comparison","samples":31663164,"opsSec":63184074.994453035},{"name":"(long string) (true) String#endsWith","samples":25534987,"opsSec":51061487.17234006},{"name":"(long string) (true) String#slice and strict comparison","samples":28954709,"opsSec":57814785.256308064},{"name":"(short string) (false) String#endsWith","samples":29804146,"opsSec":59608258.14250938},{"name":"(short string) (false) String#slice and strict comparison","samples":31346958,"opsSec":62693899.44881054},{"name":"(long string) (false) String#endsWith","samples":27407393,"opsSec":54789713.8981819},{"name":"(long string) (false) String#slice and strict comparison","samples":28884430,"opsSec":57735789.97874439}]}-->
