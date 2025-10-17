## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|86,308,839|43154474|
|(short string) (true) String#slice and strict comparison|54,495,941|27252645|
|(long string) (true) String#endsWith|54,911,825|27456531|
|(long string) (true) String#slice and strict comparison|49,218,144|24609079|
|(short string) (false) String#endsWith|92,889,444|46460876|
|(short string) (false) String#slice and strict comparison|53,813,942|26906977|
|(long string) (false) String#endsWith|85,631,112|42815562|
|(long string) (false) String#slice and strict comparison|48,470,791|24235510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:18:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":43154474,"opsSec":86308839.76871492},{"name":"(short string) (true) String#slice and strict comparison","samples":27252645,"opsSec":54495941.003337115},{"name":"(long string) (true) String#endsWith","samples":27456531,"opsSec":54911825.82497703},{"name":"(long string) (true) String#slice and strict comparison","samples":24609079,"opsSec":49218144.809537195},{"name":"(short string) (false) String#endsWith","samples":46460876,"opsSec":92889444.86529696},{"name":"(short string) (false) String#slice and strict comparison","samples":26906977,"opsSec":53813942.16093273},{"name":"(long string) (false) String#endsWith","samples":42815562,"opsSec":85631112.69669312},{"name":"(long string) (false) String#slice and strict comparison","samples":24235510,"opsSec":48470791.89645334}]}-->
