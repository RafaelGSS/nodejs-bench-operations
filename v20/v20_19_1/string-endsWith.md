## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,653,085|26326545|
|(short string) (true) String#slice and strict comparison|63,458,583|31746884|
|(long string) (true) String#endsWith|51,386,882|25693448|
|(long string) (true) String#slice and strict comparison|58,907,457|29459443|
|(short string) (false) String#endsWith|60,528,208|30264112|
|(short string) (false) String#slice and strict comparison|62,769,449|31385197|
|(long string) (false) String#endsWith|55,281,167|27640600|
|(long string) (false) String#slice and strict comparison|58,294,168|29147094|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:12:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26326545,"opsSec":52653085.36652849},{"name":"(short string) (true) String#slice and strict comparison","samples":31746884,"opsSec":63458583.89582762},{"name":"(long string) (true) String#endsWith","samples":25693448,"opsSec":51386882.53663678},{"name":"(long string) (true) String#slice and strict comparison","samples":29459443,"opsSec":58907457.717572965},{"name":"(short string) (false) String#endsWith","samples":30264112,"opsSec":60528208.38372224},{"name":"(short string) (false) String#slice and strict comparison","samples":31385197,"opsSec":62769449.068713725},{"name":"(long string) (false) String#endsWith","samples":27640600,"opsSec":55281167.71579806},{"name":"(long string) (false) String#slice and strict comparison","samples":29147094,"opsSec":58294168.9961009}]}-->
