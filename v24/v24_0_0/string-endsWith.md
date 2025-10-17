## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|87,316,182|43732034|
|(short string) (true) String#slice and strict comparison|55,617,298|27821241|
|(long string) (true) String#endsWith|67,780,945|33890486|
|(long string) (true) String#slice and strict comparison|51,376,532|25688640|
|(short string) (false) String#endsWith|84,848,765|42428676|
|(short string) (false) String#slice and strict comparison|57,307,573|28653791|
|(long string) (false) String#endsWith|86,202,054|43101553|
|(long string) (false) String#slice and strict comparison|50,896,119|25448066|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:17:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":43732034,"opsSec":87316182.32831419},{"name":"(short string) (true) String#slice and strict comparison","samples":27821241,"opsSec":55617298.15369222},{"name":"(long string) (true) String#endsWith","samples":33890486,"opsSec":67780945.83655491},{"name":"(long string) (true) String#slice and strict comparison","samples":25688640,"opsSec":51376532.57420411},{"name":"(short string) (false) String#endsWith","samples":42428676,"opsSec":84848765.81399222},{"name":"(short string) (false) String#slice and strict comparison","samples":28653791,"opsSec":57307573.86232451},{"name":"(long string) (false) String#endsWith","samples":43101553,"opsSec":86202054.33493711},{"name":"(long string) (false) String#slice and strict comparison","samples":25448066,"opsSec":50896119.68313903}]}-->
