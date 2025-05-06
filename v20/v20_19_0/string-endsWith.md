## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,565,450|27286261|
|(short string) (true) String#slice and strict comparison|63,291,645|31645834|
|(long string) (true) String#endsWith|51,544,360|25772185|
|(long string) (true) String#slice and strict comparison|58,639,784|29324106|
|(short string) (false) String#endsWith|59,583,732|29791873|
|(short string) (false) String#slice and strict comparison|56,758,925|28379470|
|(long string) (false) String#endsWith|54,177,306|27088662|
|(long string) (false) String#slice and strict comparison|56,709,444|28386259|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:09:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27286261,"opsSec":54565450.64498912},{"name":"(short string) (true) String#slice and strict comparison","samples":31645834,"opsSec":63291645.84792395},{"name":"(long string) (true) String#endsWith","samples":25772185,"opsSec":51544360.41274896},{"name":"(long string) (true) String#slice and strict comparison","samples":29324106,"opsSec":58639784.8765154},{"name":"(short string) (false) String#endsWith","samples":29791873,"opsSec":59583732.89157876},{"name":"(short string) (false) String#slice and strict comparison","samples":28379470,"opsSec":56758925.35619725},{"name":"(long string) (false) String#endsWith","samples":27088662,"opsSec":54177306.66326187},{"name":"(long string) (false) String#slice and strict comparison","samples":28386259,"opsSec":56709444.73479595}]}-->
