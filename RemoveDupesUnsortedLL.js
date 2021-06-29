// JavaScript program to remove duplicates from unsorted linkedlist
 
     class node {
 
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }
 
    /*
     Function to remove duplicates
     from a unsorted linked list
     */
    function removeDuplicate( head) {
        // Hash to store seen values
        var hs =  new Set();
 
        /* Pick elements one by one */
        var current = head;
        var prev = null;
        while (current != null) {
            var curval = current.val;
 
            // If current value is seen before
            if (hs.has(curval)) {
                prev.next = current.next;
            } else {
                hs.add(curval);
                prev = current;
            }
            current = current.next;
        }
 
    }
 
    /* Function to print nodes in a
    given linked list */
    function printList( head) {
        while (head != null) {
            console.log(head.val + " ");
            head = head.next;
        }
    }