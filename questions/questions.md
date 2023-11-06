*Question 1*


From: marissa@startup.com
Subject:  Bad design

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Thanks,
Marissa

--

Hi Marissa,

I appreciate your concern, and thank you for reaching out. I can imagine how frustrating this can be for you. We greatly value your opinion but no worries, I have another solution for you that may be more convenient.

Please refer to this documentation that explains how to delete indices with the API: https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices/#delete-indices-with-the-api, if you are looking to clear records from the index with the API follow this link: https://www.algolia.com/doc/guides/sending-and-managing-data/manage-indices-and-apps/manage-indices/how-to/delete-indices/#clear-records-from-an-index-with-the-api.

Let me know if that helps and please do not hesitate to reach back out to me for any other assistance or questions! Thank you for choosing our product and I hope I was able to resolve your issue today.

Best,
Steve Stewart


*Question 2*:

From: carrie@coffee.com
Subject: URGENT ISSUE WITH PRODUCTION!!!!

Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".

Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?

Please advise on how to fix this. Thanks.

--
Hi Carrie,

First of all, thank you for choosing our service. We hope to continue to fulfill all your websites needs. Secondly, my sincerest apology that you are experiencing that issue. Luckily, I know first hand what you're experiencing. Let me send you some documentation that should help resolve your issue and get your users back to publishing their feedback.

The message the users are recieving is due to the record size being too big, currently they're exceeding 10 KB which is the max limit for the Build plan. As you stated, every record is enriched with a lot of metadata that is not used for search. We can go ahead and make the records smaller before sending them to Algolia, rather than upgrading your service. Please refer to the following documentation on how to do so: https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/reducing-object-size/#remove-unused-attributes.

Also, if you happened to take the approach of having one record per page this could lead to hitting the record size limit sooner. Instead, you can split content into smaller records by paragraphs. You can find more information on how to do so here: https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/indexing-long-documents/.

This documentation should resolve the issue and have the users back to publishing feedback. If you are still facing any issues please let me know!

Best,
Steve Stewart


*Question 3*:


From: marc@hotmail.com
Subject: Error on website

Hi, my website is not working and here's the error:

![error message](./error.png)

Can you fix it please?

Hi Marc,

Thank you for contacting Algolia. I'm afraid the issue you are experiencing is not related to Algolia but instead a JavaScript reference error. If you are using Algolia, I'll be more than happy to assist if you provide me more information as to how you are implementing our service with your website.

Kind regards,
Steve Stewart

