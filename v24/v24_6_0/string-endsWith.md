## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|86,855,627|43427846|
|(short string) (true) String#slice and strict comparison|56,073,523|28036770|
|(long string) (true) String#endsWith|67,557,258|33779284|
|(long string) (true) String#slice and strict comparison|45,692,234|22846131|
|(short string) (false) String#endsWith|92,035,548|46017782|
|(short string) (false) String#slice and strict comparison|56,017,965|28059340|
|(long string) (false) String#endsWith|86,934,607|43467333|
|(long string) (false) String#slice and strict comparison|51,533,302|25806645|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:39:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":43427846,"opsSec":86855627.20570211},{"name":"(short string) (true) String#slice and strict comparison","samples":28036770,"opsSec":56073523.06579604},{"name":"(long string) (true) String#endsWith","samples":33779284,"opsSec":67557258.47010182},{"name":"(long string) (true) String#slice and strict comparison","samples":22846131,"opsSec":45692234.2191216},{"name":"(short string) (false) String#endsWith","samples":46017782,"opsSec":92035548.53802785},{"name":"(short string) (false) String#slice and strict comparison","samples":28059340,"opsSec":56017965.97119597},{"name":"(long string) (false) String#endsWith","samples":43467333,"opsSec":86934607.23220551},{"name":"(long string) (false) String#slice and strict comparison","samples":25806645,"opsSec":51533302.68730051}]}-->
