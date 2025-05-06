## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|53,337,319|26668671|
|(short string) (true) String#slice and strict comparison|46,716,507|23358262|
|(long string) (true) String#endsWith|49,721,735|24860877|
|(long string) (true) String#slice and strict comparison|43,968,287|21987405|
|(short string) (false) String#endsWith|57,103,666|28551842|
|(short string) (false) String#slice and strict comparison|54,755,344|27382715|
|(long string) (false) String#endsWith|54,142,110|27077952|
|(long string) (false) String#slice and strict comparison|48,802,175|24401566|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:08:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26668671,"opsSec":53337319.27830199},{"name":"(short string) (true) String#slice and strict comparison","samples":23358262,"opsSec":46716507.92952127},{"name":"(long string) (true) String#endsWith","samples":24860877,"opsSec":49721735.80184469},{"name":"(long string) (true) String#slice and strict comparison","samples":21987405,"opsSec":43968287.6562725},{"name":"(short string) (false) String#endsWith","samples":28551842,"opsSec":57103666.29786345},{"name":"(short string) (false) String#slice and strict comparison","samples":27382715,"opsSec":54755344.50358519},{"name":"(long string) (false) String#endsWith","samples":27077952,"opsSec":54142110.43109391},{"name":"(long string) (false) String#slice and strict comparison","samples":24401566,"opsSec":48802175.3797582}]}-->
