function unionArray(nums1, nums2) {
    let result = [];
    let i = 0, j = 0;
    for (; i <= nums1.length - 1 && j <= nums2.length - 1;) {
        if (nums1[i] < nums2[j]) {
            if (result[result.length - 1] === nums1[i]) {
                i++;
            }
            else {
                result.push(nums1[i]);
                i++;
            }
        }

        if (nums1[i] > nums2[j]) {
            if (result[result.length - 1] === nums2[j]) {
                j++;
            }
            else {
                result.push(nums2[j]);
                j++;
            }

        }

        if (nums1[i] === nums2[j]) {
            if (result[result.length - 1] === nums2[j]) {
                i++;
                j++;
            }
            else {
                result.push(nums2[j]);
                j++;
                i++;
            }
        }
    }

    while (i <= nums1.length - 1) {
        if (result[result.length - 1] === nums1[i]) {
            i++;
        }
        else {
            result.push(nums1[i]);
            i++;
        }
    }

    while (j <= nums2.length - 1) {
        if (result[result.length - 1] === nums2[j]) {
            j++;
        }
        else {
            result.push(nums2[j]);
            j++;
        }
    }

    return result;
}