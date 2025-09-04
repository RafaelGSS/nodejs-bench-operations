## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|84,256,682|42354448|
|(short string) (true) String#slice and strict comparison|57,060,787|28531391|
|(long string) (true) String#endsWith|63,825,335|31918276|
|(long string) (true) String#slice and strict comparison|52,467,569|26233855|
|(short string) (false) String#endsWith|91,851,296|45952399|
|(short string) (false) String#slice and strict comparison|58,433,451|29216781|
|(long string) (false) String#endsWith|85,066,314|42539442|
|(long string) (false) String#slice and strict comparison|52,589,696|26294904|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:38:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":42354448,"opsSec":84256682.12985422},{"name":"(short string) (true) String#slice and strict comparison","samples":28531391,"opsSec":57060787.95370417},{"name":"(long string) (true) String#endsWith","samples":31918276,"opsSec":63825335.46319637},{"name":"(long string) (true) String#slice and strict comparison","samples":26233855,"opsSec":52467569.177044325},{"name":"(short string) (false) String#endsWith","samples":45952399,"opsSec":91851296.82403113},{"name":"(short string) (false) String#slice and strict comparison","samples":29216781,"opsSec":58433451.44390987},{"name":"(long string) (false) String#endsWith","samples":42539442,"opsSec":85066314.09103203},{"name":"(long string) (false) String#slice and strict comparison","samples":26294904,"opsSec":52589696.29948506}]}-->
