## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|83,658,392|41829226|
|(short string) (true) String#slice and strict comparison|53,941,448|26970732|
|(long string) (true) String#endsWith|65,659,430|32848373|
|(long string) (true) String#slice and strict comparison|49,630,695|24833304|
|(short string) (false) String#endsWith|90,897,351|45448684|
|(short string) (false) String#slice and strict comparison|55,165,336|27597167|
|(long string) (false) String#endsWith|82,121,544|41069960|
|(long string) (false) String#slice and strict comparison|49,893,582|24955198|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:09:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":41829226,"opsSec":83658392.60254125},{"name":"(short string) (true) String#slice and strict comparison","samples":26970732,"opsSec":53941448.680628575},{"name":"(long string) (true) String#endsWith","samples":32848373,"opsSec":65659430.43249661},{"name":"(long string) (true) String#slice and strict comparison","samples":24833304,"opsSec":49630695.724880435},{"name":"(short string) (false) String#endsWith","samples":45448684,"opsSec":90897351.82027137},{"name":"(short string) (false) String#slice and strict comparison","samples":27597167,"opsSec":55165336.892315924},{"name":"(long string) (false) String#endsWith","samples":41069960,"opsSec":82121544.48320645},{"name":"(long string) (false) String#slice and strict comparison","samples":24955198,"opsSec":49893582.66094058}]}-->
